import { Address } from './../../core/models/address';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Order } from '../../core/models/order';
import { AddressService } from '../address/services/address.service';
import { PaymentService } from '../payment/services/payment.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CheckoutEffects {
  isBuyNowAction: boolean;

  @Effect()
  AddToCart$ = this.actions$.pipe(
    ofType(CheckoutActions.ADD_TO_CART),
    switchMap<
      Action & {
        payload: { variant_id: number; quantity: number; isBuyNow: boolean };
      },
      Observable<Order>
    >(action => {
      this.isBuyNowAction = action.payload.isBuyNow;
      return this.checkoutService.createNewLineItem(
        action.payload.variant_id,
        action.payload.quantity
      );
    }),
    map(order => {
      if (this.isBuyNowAction) {
        this.router.navigate(['checkout', 'cart']);
      }
      return this.actions.fetchCurrentOrderSuccess(order);
    })
  );

  @Effect()
  OrderDetails$ = this.actions$.pipe(
    ofType(CheckoutActions.GET_ORDER_DETAILS),
    switchMap<Action, Observable<Order>>(_ => this.checkoutService.getOrder()),
    map(order => this.actions.fetchCurrentOrderSuccess(order))
  );

  @Effect()
  BindAddress$ = this.actions$.pipe(
    ofType(CheckoutActions.BIND_ADDRESS),
    switchMap<
      Action & { payload: { address: Address; orderId: number } },
      Observable<Order>
    >(action => {
      return this.addressService.bindAddressToOrder(
        action.payload.address,
        action.payload.orderId
      );
    }),
    map(order => this.actions.fetchCurrentOrderSuccess(order))
  );

  @Effect()
  BindPayment$ = this.actions$.pipe(
    ofType(CheckoutActions.BIND_PAYMENT),
    switchMap<
      Action & {
        payload: {
          paymentMethodId: number;
          orderId: number;
          orderAmount: number;
        };
      },
      Observable<Order>
    >(action => {
      return this.paymentService.addPaymentToOrder(
        action.payload.paymentMethodId,
        action.payload.orderId,
        action.payload.orderAmount
      );
    }),
    map(order => this.actions.getOrderPaymentsSuccess(order))
  );

  @Effect()
  ShippingPreferencess$ = this.actions$.pipe(
    ofType(CheckoutActions.SHIPPING_PREFERENCES),
    switchMap<
      Action & { payload: { orderId: number; packages: Array<{}> } },
      Observable<Order>
    >(action => {
      return this.checkoutService.saveShippingPreferences(
        action.payload.orderId,
        action.payload.packages
      );
    }),
    map(order => {
      this.router.navigate(['/checkout', 'payment']);
      return this.actions.fetchCurrentOrderSuccess(order);
    })
  );

  constructor(
    private actions$: Actions,
    private checkoutService: CheckoutService,
    private actions: CheckoutActions,
    private addressService: AddressService,
    private paymentService: PaymentService,
    private router: Router
  ) {}
}

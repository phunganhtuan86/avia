/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ApplicationRef } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
export interface TransferHttpResponse {
    body?: any | null;
    headers?: {
        [k: string]: string[];
    };
    status?: number;
    statusText?: string;
    url?: string;
}
export declare class TransferHttpCacheInterceptor implements HttpInterceptor {
    private transferState;
    private isCacheActive;
    private invalidateCacheEntry;
    private makeCacheKey;
    constructor(appRef: ApplicationRef, transferState: TransferState);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
/**
 * An NgModule used in conjunction with `ServerTransferHttpCacheModule` to transfer cached HTTP
 * calls from the server to the client application.
 */
export declare class TransferHttpCacheModule {
}

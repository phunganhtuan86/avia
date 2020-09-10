import { HttpResponse, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, ApplicationRef, NgModule, APP_INITIALIZER } from '@angular/core';
import { makeStateKey, TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} headers
 * @return {?}
 */
function getHeadersMap(headers) {
    /** @type {?} */
    const headersMap = {};
    for (const key of headers.keys()) {
        headersMap[key] = (/** @type {?} */ (headers.getAll(key)));
    }
    return headersMap;
}
class TransferHttpCacheInterceptor {
    /**
     * @param {?} appRef
     * @param {?} transferState
     */
    constructor(appRef, transferState) {
        this.transferState = transferState;
        this.isCacheActive = true;
        // Stop using the cache if the application has stabilized, indicating initial rendering is
        // complete.
        appRef.isStable
            .pipe(filter((/**
         * @param {?} isStable
         * @return {?}
         */
        (isStable) => isStable)), take(1)).toPromise()
            .then((/**
         * @return {?}
         */
        () => { this.isCacheActive = false; }));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    invalidateCacheEntry(url) {
        Object.keys(this.transferState['store'])
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => key.includes(url) ? this.transferState.remove(makeStateKey(key)) : null));
    }
    /**
     * @private
     * @param {?} method
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    makeCacheKey(method, url, params) {
        // make the params encoded same as a url so it's easy to identify
        /** @type {?} */
        const encodedParams = params.keys().sort().map((/**
         * @param {?} k
         * @return {?}
         */
        k => `${k}=${params.get(k)}`)).join('&');
        /** @type {?} */
        const key = (method === 'GET' ? 'G.' : 'H.') + url + '?' + encodedParams;
        return makeStateKey(key);
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        // Stop using the cache if there is a mutating call.
        if (req.method !== 'GET' && req.method !== 'HEAD') {
            this.isCacheActive = false;
            this.invalidateCacheEntry(req.url);
        }
        if (!this.isCacheActive) {
            // Cache is no longer active. Pass the request through.
            return next.handle(req);
        }
        /** @type {?} */
        const storeKey = this.makeCacheKey(req.method, req.url, req.params);
        if (this.transferState.hasKey(storeKey)) {
            // Request found in cache. Respond using it.
            /** @type {?} */
            const response = this.transferState.get(storeKey, (/** @type {?} */ ({})));
            return of(new HttpResponse({
                body: response.body,
                headers: new HttpHeaders(response.headers),
                status: response.status,
                statusText: response.statusText,
                url: response.url,
            }));
        }
        else {
            // Request not found in cache. Make the request and cache it.
            /** @type {?} */
            const httpEvent = next.handle(req);
            return httpEvent
                .pipe(tap((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (event instanceof HttpResponse) {
                    this.transferState.set(storeKey, {
                        body: event.body,
                        headers: getHeadersMap(event.headers),
                        status: event.status,
                        statusText: event.statusText,
                        url: (/** @type {?} */ (event.url)),
                    });
                }
            })));
        }
    }
}
TransferHttpCacheInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TransferHttpCacheInterceptor.ctorParameters = () => [
    { type: ApplicationRef },
    { type: TransferState }
];
/**
 * An NgModule used in conjunction with `ServerTransferHttpCacheModule` to transfer cached HTTP
 * calls from the server to the client application.
 */
class TransferHttpCacheModule {
}
TransferHttpCacheModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserTransferStateModule],
                providers: [
                    TransferHttpCacheInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: TransferHttpCacheInterceptor, multi: true },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} doc
 * @return {?}
 */
function domContentLoadedFactory(doc) {
    return (/**
     * @return {?}
     */
    () => new Promise((/**
     * @param {?} resolve
     * @param {?} _reject
     * @return {?}
     */
    (resolve, _reject) => {
        /** @type {?} */
        const contentLoaded = (/**
         * @return {?}
         */
        () => {
            doc.removeEventListener('DOMContentLoaded', contentLoaded);
            resolve();
        });
        if (doc.readyState === 'complete' || doc.readyState === 'interactive') {
            resolve();
        }
        else {
            doc.addEventListener('DOMContentLoaded', contentLoaded);
        }
    })));
}
class StateTransferInitializerModule {
}
StateTransferInitializerModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: APP_INITIALIZER, multi: true, useFactory: domContentLoadedFactory, deps: [DOCUMENT] },
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { domContentLoadedFactory as ɵnguniversal_modules_common_common_a, TransferHttpCacheModule, StateTransferInitializerModule, TransferHttpCacheInterceptor as ɵTransferHttpCacheInterceptor };
//# sourceMappingURL=common.js.map

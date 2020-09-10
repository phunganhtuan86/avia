/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HTTP_INTERCEPTORS, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApplicationRef, Injectable, NgModule } from '@angular/core';
import { BrowserTransferStateModule, TransferState, makeStateKey } from '@angular/platform-browser';
import { of as observableOf } from 'rxjs';
import { tap, take, filter } from 'rxjs/operators';
/**
 * @record
 */
export function TransferHttpResponse() { }
if (false) {
    /** @type {?|undefined} */
    TransferHttpResponse.prototype.body;
    /** @type {?|undefined} */
    TransferHttpResponse.prototype.headers;
    /** @type {?|undefined} */
    TransferHttpResponse.prototype.status;
    /** @type {?|undefined} */
    TransferHttpResponse.prototype.statusText;
    /** @type {?|undefined} */
    TransferHttpResponse.prototype.url;
}
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
export class TransferHttpCacheInterceptor {
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
            return observableOf(new HttpResponse({
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    TransferHttpCacheInterceptor.prototype.isCacheActive;
    /**
     * @type {?}
     * @private
     */
    TransferHttpCacheInterceptor.prototype.transferState;
}
/**
 * An NgModule used in conjunction with `ServerTransferHttpCacheModule` to transfer cached HTTP
 * calls from the server to the client application.
 */
export class TransferHttpCacheModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXJfaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvY29tbW9uL3NyYy90cmFuc2Zlcl9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUNMLGlCQUFpQixFQUdqQixXQUFXLEVBR1gsWUFBWSxFQUViLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsYUFBYSxFQUNiLFlBQVksRUFFYixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBYSxFQUFFLElBQUksWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRWpELDBDQU1DOzs7SUFMQyxvQ0FBa0I7O0lBQ2xCLHVDQUFrQzs7SUFDbEMsc0NBQWdCOztJQUNoQiwwQ0FBb0I7O0lBQ3BCLG1DQUFhOzs7Ozs7QUFHZixTQUFTLGFBQWEsQ0FBQyxPQUFvQjs7VUFDbkMsVUFBVSxHQUErQixFQUFFO0lBQ2pELEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2hDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBR0QsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUFnQnZDLFlBQVksTUFBc0IsRUFBVSxhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWRoRSxrQkFBYSxHQUFHLElBQUksQ0FBQztRQWUzQiwwRkFBMEY7UUFDMUYsWUFBWTtR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WSxZQUFZLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTt3QkFDL0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO3dCQUNoQixPQUFPLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7d0JBQ3JDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTt3QkFDcEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO3dCQUM1QixHQUFHLEVBQUUsbUJBQUEsS0FBSyxDQUFDLEdBQUcsRUFBQztxQkFDaEIsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7O1lBdEVGLFVBQVU7Ozs7WUExQkgsY0FBYztZQUdwQixhQUFhOzs7Ozs7O0lBMEJiLHFEQUE2Qjs7Ozs7SUFjTyxxREFBb0M7Ozs7OztBQW1FMUUsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBUG5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDckMsU0FBUyxFQUFFO29CQUNULDRCQUE0QjtvQkFDNUIsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLDRCQUE0QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7aUJBQ3JGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7XG4gIEhUVFBfSU5URVJDRVBUT1JTLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSGVhZGVycyxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwUGFyYW1zXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QXBwbGljYXRpb25SZWYsIEluamVjdGFibGUsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlLFxuICBUcmFuc2ZlclN0YXRlLFxuICBtYWtlU3RhdGVLZXksXG4gIFN0YXRlS2V5XG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YXAsIHRha2UsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZmVySHR0cFJlc3BvbnNlIHtcbiAgYm9keT86IGFueSB8IG51bGw7XG4gIGhlYWRlcnM/OiB7W2s6IHN0cmluZ106IHN0cmluZ1tdfTtcbiAgc3RhdHVzPzogbnVtYmVyO1xuICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldEhlYWRlcnNNYXAoaGVhZGVyczogSHR0cEhlYWRlcnMpIHtcbiAgY29uc3QgaGVhZGVyc01hcDoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmdbXX0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgb2YgaGVhZGVycy5rZXlzKCkpIHtcbiAgICBoZWFkZXJzTWFwW2tleV0gPSBoZWFkZXJzLmdldEFsbChrZXkpITtcbiAgfVxuICByZXR1cm4gaGVhZGVyc01hcDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVySHR0cENhY2hlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIHByaXZhdGUgaXNDYWNoZUFjdGl2ZSA9IHRydWU7XG5cbiAgcHJpdmF0ZSBpbnZhbGlkYXRlQ2FjaGVFbnRyeSh1cmw6IHN0cmluZykge1xuICAgIE9iamVjdC5rZXlzKHRoaXMudHJhbnNmZXJTdGF0ZVsnc3RvcmUnXSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiBrZXkuaW5jbHVkZXModXJsKSA/IHRoaXMudHJhbnNmZXJTdGF0ZS5yZW1vdmUobWFrZVN0YXRlS2V5KGtleSkpIDogbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VDYWNoZUtleShtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIHBhcmFtczogSHR0cFBhcmFtcyk6IFN0YXRlS2V5PHN0cmluZz4ge1xuICAgIC8vIG1ha2UgdGhlIHBhcmFtcyBlbmNvZGVkIHNhbWUgYXMgYSB1cmwgc28gaXQncyBlYXN5IHRvIGlkZW50aWZ5XG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHBhcmFtcy5rZXlzKCkuc29ydCgpLm1hcChrID0+IGAke2t9PSR7cGFyYW1zLmdldChrKX1gKS5qb2luKCcmJyk7XG4gICAgY29uc3Qga2V5ID0gKG1ldGhvZCA9PT0gJ0dFVCcgPyAnRy4nIDogJ0guJykgKyB1cmwgKyAnPycgKyBlbmNvZGVkUGFyYW1zO1xuICAgIHJldHVybiBtYWtlU3RhdGVLZXk8VHJhbnNmZXJIdHRwUmVzcG9uc2U+KGtleSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCBwcml2YXRlIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUpIHtcbiAgICAvLyBTdG9wIHVzaW5nIHRoZSBjYWNoZSBpZiB0aGUgYXBwbGljYXRpb24gaGFzIHN0YWJpbGl6ZWQsIGluZGljYXRpbmcgaW5pdGlhbCByZW5kZXJpbmcgaXNcbiAgICAvLyBjb21wbGV0ZS5cbiAgICBhcHBSZWYuaXNTdGFibGVcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGlzU3RhYmxlOiBib29sZWFuKSA9PiBpc1N0YWJsZSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgICkudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKCgpID0+IHsgdGhpcy5pc0NhY2hlQWN0aXZlID0gZmFsc2U7IH0pO1xuICB9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgLy8gU3RvcCB1c2luZyB0aGUgY2FjaGUgaWYgdGhlcmUgaXMgYSBtdXRhdGluZyBjYWxsLlxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJyAmJiByZXEubWV0aG9kICE9PSAnSEVBRCcpIHtcbiAgICAgIHRoaXMuaXNDYWNoZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pbnZhbGlkYXRlQ2FjaGVFbnRyeShyZXEudXJsKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNDYWNoZUFjdGl2ZSkge1xuICAgICAgLy8gQ2FjaGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZS4gUGFzcyB0aGUgcmVxdWVzdCB0aHJvdWdoLlxuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVLZXkgPSB0aGlzLm1ha2VDYWNoZUtleShyZXEubWV0aG9kLCByZXEudXJsLCByZXEucGFyYW1zKTtcblxuICAgIGlmICh0aGlzLnRyYW5zZmVyU3RhdGUuaGFzS2V5KHN0b3JlS2V5KSkge1xuICAgICAgLy8gUmVxdWVzdCBmb3VuZCBpbiBjYWNoZS4gUmVzcG9uZCB1c2luZyBpdC5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy50cmFuc2ZlclN0YXRlLmdldChzdG9yZUtleSwge30gYXMgVHJhbnNmZXJIdHRwUmVzcG9uc2UpO1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihuZXcgSHR0cFJlc3BvbnNlPGFueT4oe1xuICAgICAgICBib2R5OiByZXNwb25zZS5ib2R5LFxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMocmVzcG9uc2UuaGVhZGVycyksXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICB1cmw6IHJlc3BvbnNlLnVybCxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVxdWVzdCBub3QgZm91bmQgaW4gY2FjaGUuIE1ha2UgdGhlIHJlcXVlc3QgYW5kIGNhY2hlIGl0LlxuICAgICAgY29uc3QgaHR0cEV2ZW50ID0gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIHJldHVybiBodHRwRXZlbnRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFwKChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyU3RhdGUuc2V0KHN0b3JlS2V5LCB7XG4gICAgICAgICAgICAgICAgYm9keTogZXZlbnQuYm9keSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBnZXRIZWFkZXJzTWFwKGV2ZW50LmhlYWRlcnMpLFxuICAgICAgICAgICAgICAgIHN0YXR1czogZXZlbnQuc3RhdHVzLFxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGV2ZW50LnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgICAgdXJsOiBldmVudC51cmwhLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFuIE5nTW9kdWxlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgU2VydmVyVHJhbnNmZXJIdHRwQ2FjaGVNb2R1bGVgIHRvIHRyYW5zZmVyIGNhY2hlZCBIVFRQXG4gKiBjYWxscyBmcm9tIHRoZSBzZXJ2ZXIgdG8gdGhlIGNsaWVudCBhcHBsaWNhdGlvbi5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Jyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVHJhbnNmZXJIdHRwQ2FjaGVJbnRlcmNlcHRvcixcbiAgICB7cHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUV4aXN0aW5nOiBUcmFuc2Zlckh0dHBDYWNoZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZX0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVySHR0cENhY2hlTW9kdWxlIHt9XG4iXX0=
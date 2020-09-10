import * as tslib_1 from "tslib";
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
function getHeadersMap(headers) {
    var e_1, _a;
    var headersMap = {};
    try {
        for (var _b = tslib_1.__values(headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            headersMap[key] = headers.getAll(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return headersMap;
}
var TransferHttpCacheInterceptor = /** @class */ (function () {
    function TransferHttpCacheInterceptor(appRef, transferState) {
        var _this = this;
        this.transferState = transferState;
        this.isCacheActive = true;
        // Stop using the cache if the application has stabilized, indicating initial rendering is
        // complete.
        appRef.isStable
            .pipe(filter(function (isStable) { return isStable; }), take(1)).toPromise()
            .then(function () { _this.isCacheActive = false; });
    }
    TransferHttpCacheInterceptor.prototype.invalidateCacheEntry = function (url) {
        var _this = this;
        Object.keys(this.transferState['store'])
            .forEach(function (key) { return key.includes(url) ? _this.transferState.remove(makeStateKey(key)) : null; });
    };
    TransferHttpCacheInterceptor.prototype.makeCacheKey = function (method, url, params) {
        // make the params encoded same as a url so it's easy to identify
        var encodedParams = params.keys().sort().map(function (k) { return k + "=" + params.get(k); }).join('&');
        var key = (method === 'GET' ? 'G.' : 'H.') + url + '?' + encodedParams;
        return makeStateKey(key);
    };
    TransferHttpCacheInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // Stop using the cache if there is a mutating call.
        if (req.method !== 'GET' && req.method !== 'HEAD') {
            this.isCacheActive = false;
            this.invalidateCacheEntry(req.url);
        }
        if (!this.isCacheActive) {
            // Cache is no longer active. Pass the request through.
            return next.handle(req);
        }
        var storeKey = this.makeCacheKey(req.method, req.url, req.params);
        if (this.transferState.hasKey(storeKey)) {
            // Request found in cache. Respond using it.
            var response = this.transferState.get(storeKey, {});
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
            var httpEvent = next.handle(req);
            return httpEvent
                .pipe(tap(function (event) {
                if (event instanceof HttpResponse) {
                    _this.transferState.set(storeKey, {
                        body: event.body,
                        headers: getHeadersMap(event.headers),
                        status: event.status,
                        statusText: event.statusText,
                        url: event.url,
                    });
                }
            }));
        }
    };
    TransferHttpCacheInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ApplicationRef, TransferState])
    ], TransferHttpCacheInterceptor);
    return TransferHttpCacheInterceptor;
}());
export { TransferHttpCacheInterceptor };
/**
 * An NgModule used in conjunction with `ServerTransferHttpCacheModule` to transfer cached HTTP
 * calls from the server to the client application.
 */
var TransferHttpCacheModule = /** @class */ (function () {
    function TransferHttpCacheModule() {
    }
    TransferHttpCacheModule = tslib_1.__decorate([
        NgModule({
            imports: [BrowserTransferStateModule],
            providers: [
                TransferHttpCacheInterceptor,
                { provide: HTTP_INTERCEPTORS, useExisting: TransferHttpCacheInterceptor, multi: true },
            ],
        })
    ], TransferHttpCacheModule);
    return TransferHttpCacheModule;
}());
export { TransferHttpCacheModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXJfaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvY29tbW9uL3NyYy90cmFuc2Zlcl9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQ0wsaUJBQWlCLEVBR2pCLFdBQVcsRUFHWCxZQUFZLEVBRWIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixhQUFhLEVBQ2IsWUFBWSxFQUViLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFhLEVBQUUsSUFBSSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFVakQsU0FBUyxhQUFhLENBQUMsT0FBb0I7O0lBQ3pDLElBQU0sVUFBVSxHQUErQixFQUFFLENBQUM7O1FBQ2xELEtBQWtCLElBQUEsS0FBQSxpQkFBQSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7WUFBN0IsSUFBTSxHQUFHLFdBQUE7WUFDWixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBQztTQUN4Qzs7Ozs7Ozs7O0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUdEO0lBZ0JFLHNDQUFZLE1BQXNCLEVBQVUsYUFBNEI7UUFBeEUsaUJBU0M7UUFUMkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFkaEUsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFlM0IsMEZBQTBGO1FBQzFGLFlBQVk7UUFDWixNQUFNLENBQUMsUUFBUTthQUNaLElBQUksQ0FDSCxNQUFNLENB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QUFHLENBQUMsVUFBQyxLQUFxQjtnQkFDeEIsSUFBSSxLQUFLLFlBQVksWUFBWSxFQUFFO29CQUNqQyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7d0JBQy9CLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTt3QkFDaEIsT0FBTyxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUNyQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07d0JBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTt3QkFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFJO3FCQUNoQixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBckVVLDRCQUE0QjtRQUR4QyxVQUFVLEVBQUU7aURBaUJTLGNBQWMsRUFBeUIsYUFBYTtPQWhCN0QsNEJBQTRCLENBc0V4QztJQUFELG1DQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0F0RVksNEJBQTRCO0FBd0V6Qzs7O0dBR0c7QUFRSDtJQUFBO0lBQXNDLENBQUM7SUFBMUIsdUJBQXVCO1FBUG5DLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVCw0QkFBNEI7Z0JBQzVCLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO2FBQ3JGO1NBQ0YsQ0FBQztPQUNXLHVCQUF1QixDQUFHO0lBQUQsOEJBQUM7Q0FBQSxBQUF2QyxJQUF1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7XG4gIEhUVFBfSU5URVJDRVBUT1JTLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSGVhZGVycyxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwUGFyYW1zXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QXBwbGljYXRpb25SZWYsIEluamVjdGFibGUsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlLFxuICBUcmFuc2ZlclN0YXRlLFxuICBtYWtlU3RhdGVLZXksXG4gIFN0YXRlS2V5XG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YXAsIHRha2UsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZmVySHR0cFJlc3BvbnNlIHtcbiAgYm9keT86IGFueSB8IG51bGw7XG4gIGhlYWRlcnM/OiB7W2s6IHN0cmluZ106IHN0cmluZ1tdfTtcbiAgc3RhdHVzPzogbnVtYmVyO1xuICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldEhlYWRlcnNNYXAoaGVhZGVyczogSHR0cEhlYWRlcnMpIHtcbiAgY29uc3QgaGVhZGVyc01hcDoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmdbXX0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgb2YgaGVhZGVycy5rZXlzKCkpIHtcbiAgICBoZWFkZXJzTWFwW2tleV0gPSBoZWFkZXJzLmdldEFsbChrZXkpITtcbiAgfVxuICByZXR1cm4gaGVhZGVyc01hcDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVySHR0cENhY2hlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIHByaXZhdGUgaXNDYWNoZUFjdGl2ZSA9IHRydWU7XG5cbiAgcHJpdmF0ZSBpbnZhbGlkYXRlQ2FjaGVFbnRyeSh1cmw6IHN0cmluZykge1xuICAgIE9iamVjdC5rZXlzKHRoaXMudHJhbnNmZXJTdGF0ZVsnc3RvcmUnXSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiBrZXkuaW5jbHVkZXModXJsKSA/IHRoaXMudHJhbnNmZXJTdGF0ZS5yZW1vdmUobWFrZVN0YXRlS2V5KGtleSkpIDogbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VDYWNoZUtleShtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIHBhcmFtczogSHR0cFBhcmFtcyk6IFN0YXRlS2V5PHN0cmluZz4ge1xuICAgIC8vIG1ha2UgdGhlIHBhcmFtcyBlbmNvZGVkIHNhbWUgYXMgYSB1cmwgc28gaXQncyBlYXN5IHRvIGlkZW50aWZ5XG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHBhcmFtcy5rZXlzKCkuc29ydCgpLm1hcChrID0+IGAke2t9PSR7cGFyYW1zLmdldChrKX1gKS5qb2luKCcmJyk7XG4gICAgY29uc3Qga2V5ID0gKG1ldGhvZCA9PT0gJ0dFVCcgPyAnRy4nIDogJ0guJykgKyB1cmwgKyAnPycgKyBlbmNvZGVkUGFyYW1zO1xuICAgIHJldHVybiBtYWtlU3RhdGVLZXk8VHJhbnNmZXJIdHRwUmVzcG9uc2U+KGtleSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCBwcml2YXRlIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUpIHtcbiAgICAvLyBTdG9wIHVzaW5nIHRoZSBjYWNoZSBpZiB0aGUgYXBwbGljYXRpb24gaGFzIHN0YWJpbGl6ZWQsIGluZGljYXRpbmcgaW5pdGlhbCByZW5kZXJpbmcgaXNcbiAgICAvLyBjb21wbGV0ZS5cbiAgICBhcHBSZWYuaXNTdGFibGVcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGlzU3RhYmxlOiBib29sZWFuKSA9PiBpc1N0YWJsZSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgICkudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKCgpID0+IHsgdGhpcy5pc0NhY2hlQWN0aXZlID0gZmFsc2U7IH0pO1xuICB9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgLy8gU3RvcCB1c2luZyB0aGUgY2FjaGUgaWYgdGhlcmUgaXMgYSBtdXRhdGluZyBjYWxsLlxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJyAmJiByZXEubWV0aG9kICE9PSAnSEVBRCcpIHtcbiAgICAgIHRoaXMuaXNDYWNoZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pbnZhbGlkYXRlQ2FjaGVFbnRyeShyZXEudXJsKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNDYWNoZUFjdGl2ZSkge1xuICAgICAgLy8gQ2FjaGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZS4gUGFzcyB0aGUgcmVxdWVzdCB0aHJvdWdoLlxuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVLZXkgPSB0aGlzLm1ha2VDYWNoZUtleShyZXEubWV0aG9kLCByZXEudXJsLCByZXEucGFyYW1zKTtcblxuICAgIGlmICh0aGlzLnRyYW5zZmVyU3RhdGUuaGFzS2V5KHN0b3JlS2V5KSkge1xuICAgICAgLy8gUmVxdWVzdCBmb3VuZCBpbiBjYWNoZS4gUmVzcG9uZCB1c2luZyBpdC5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy50cmFuc2ZlclN0YXRlLmdldChzdG9yZUtleSwge30gYXMgVHJhbnNmZXJIdHRwUmVzcG9uc2UpO1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihuZXcgSHR0cFJlc3BvbnNlPGFueT4oe1xuICAgICAgICBib2R5OiByZXNwb25zZS5ib2R5LFxuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMocmVzcG9uc2UuaGVhZGVycyksXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICB1cmw6IHJlc3BvbnNlLnVybCxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVxdWVzdCBub3QgZm91bmQgaW4gY2FjaGUuIE1ha2UgdGhlIHJlcXVlc3QgYW5kIGNhY2hlIGl0LlxuICAgICAgY29uc3QgaHR0cEV2ZW50ID0gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIHJldHVybiBodHRwRXZlbnRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFwKChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyU3RhdGUuc2V0KHN0b3JlS2V5LCB7XG4gICAgICAgICAgICAgICAgYm9keTogZXZlbnQuYm9keSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBnZXRIZWFkZXJzTWFwKGV2ZW50LmhlYWRlcnMpLFxuICAgICAgICAgICAgICAgIHN0YXR1czogZXZlbnQuc3RhdHVzLFxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGV2ZW50LnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgICAgdXJsOiBldmVudC51cmwhLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFuIE5nTW9kdWxlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgU2VydmVyVHJhbnNmZXJIdHRwQ2FjaGVNb2R1bGVgIHRvIHRyYW5zZmVyIGNhY2hlZCBIVFRQXG4gKiBjYWxscyBmcm9tIHRoZSBzZXJ2ZXIgdG8gdGhlIGNsaWVudCBhcHBsaWNhdGlvbi5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Jyb3dzZXJUcmFuc2ZlclN0YXRlTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVHJhbnNmZXJIdHRwQ2FjaGVJbnRlcmNlcHRvcixcbiAgICB7cHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUV4aXN0aW5nOiBUcmFuc2Zlckh0dHBDYWNoZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZX0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVySHR0cENhY2hlTW9kdWxlIHt9XG4iXX0=
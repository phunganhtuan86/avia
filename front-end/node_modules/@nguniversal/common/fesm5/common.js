import { __decorate, __metadata, __values } from 'tslib';
import { HttpResponse, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, ApplicationRef, NgModule, APP_INITIALIZER } from '@angular/core';
import { makeStateKey, TransferState, BrowserTransferStateModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

function getHeadersMap(headers) {
    var e_1, _a;
    var headersMap = {};
    try {
        for (var _b = __values(headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    TransferHttpCacheInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApplicationRef, TransferState])
    ], TransferHttpCacheInterceptor);
    return TransferHttpCacheInterceptor;
}());
/**
 * An NgModule used in conjunction with `ServerTransferHttpCacheModule` to transfer cached HTTP
 * calls from the server to the client application.
 */
var TransferHttpCacheModule = /** @class */ (function () {
    function TransferHttpCacheModule() {
    }
    TransferHttpCacheModule = __decorate([
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

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function domContentLoadedFactory(doc) {
    return function () { return new Promise(function (resolve, _reject) {
        var contentLoaded = function () {
            doc.removeEventListener('DOMContentLoaded', contentLoaded);
            resolve();
        };
        if (doc.readyState === 'complete' || doc.readyState === 'interactive') {
            resolve();
        }
        else {
            doc.addEventListener('DOMContentLoaded', contentLoaded);
        }
    }); };
}
var StateTransferInitializerModule = /** @class */ (function () {
    function StateTransferInitializerModule() {
    }
    StateTransferInitializerModule = __decorate([
        NgModule({
            providers: [
                { provide: APP_INITIALIZER, multi: true, useFactory: domContentLoadedFactory, deps: [DOCUMENT] },
            ]
        })
    ], StateTransferInitializerModule);
    return StateTransferInitializerModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { domContentLoadedFactory as ɵnguniversal_modules_common_common_a, TransferHttpCacheModule, StateTransferInitializerModule, TransferHttpCacheInterceptor as ɵTransferHttpCacheInterceptor };
//# sourceMappingURL=common.js.map

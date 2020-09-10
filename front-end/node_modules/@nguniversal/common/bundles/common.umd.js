(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/common/http'), require('@angular/core'), require('@angular/platform-browser'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@nguniversal/common', ['exports', 'tslib', '@angular/common/http', '@angular/core', '@angular/platform-browser', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.nguniversal = global.nguniversal || {}, global.nguniversal.common = {}), global.tslib, global.ng.common.http, global.ng.core, global.ng.platformBrowser, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, function (exports, tslib_1, http, core, platformBrowser, rxjs, operators, common) { 'use strict';

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
                .pipe(operators.filter(function (isStable) { return isStable; }), operators.take(1)).toPromise()
                .then(function () { _this.isCacheActive = false; });
        }
        TransferHttpCacheInterceptor.prototype.invalidateCacheEntry = function (url) {
            var _this = this;
            Object.keys(this.transferState['store'])
                .forEach(function (key) { return key.includes(url) ? _this.transferState.remove(platformBrowser.makeStateKey(key)) : null; });
        };
        TransferHttpCacheInterceptor.prototype.makeCacheKey = function (method, url, params) {
            // make the params encoded same as a url so it's easy to identify
            var encodedParams = params.keys().sort().map(function (k) { return k + "=" + params.get(k); }).join('&');
            var key = (method === 'GET' ? 'G.' : 'H.') + url + '?' + encodedParams;
            return platformBrowser.makeStateKey(key);
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
                return rxjs.of(new http.HttpResponse({
                    body: response.body,
                    headers: new http.HttpHeaders(response.headers),
                    status: response.status,
                    statusText: response.statusText,
                    url: response.url,
                }));
            }
            else {
                // Request not found in cache. Make the request and cache it.
                var httpEvent = next.handle(req);
                return httpEvent
                    .pipe(operators.tap(function (event) {
                    if (event instanceof http.HttpResponse) {
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
            core.Injectable(),
            tslib_1.__metadata("design:paramtypes", [core.ApplicationRef, platformBrowser.TransferState])
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
        TransferHttpCacheModule = tslib_1.__decorate([
            core.NgModule({
                imports: [platformBrowser.BrowserTransferStateModule],
                providers: [
                    TransferHttpCacheInterceptor,
                    { provide: http.HTTP_INTERCEPTORS, useExisting: TransferHttpCacheInterceptor, multi: true },
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
        StateTransferInitializerModule = tslib_1.__decorate([
            core.NgModule({
                providers: [
                    { provide: core.APP_INITIALIZER, multi: true, useFactory: domContentLoadedFactory, deps: [common.DOCUMENT] },
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

    exports.ɵnguniversal_modules_common_common_a = domContentLoadedFactory;
    exports.TransferHttpCacheModule = TransferHttpCacheModule;
    exports.StateTransferInitializerModule = StateTransferInitializerModule;
    exports.ɵTransferHttpCacheInterceptor = TransferHttpCacheInterceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=common.umd.js.map

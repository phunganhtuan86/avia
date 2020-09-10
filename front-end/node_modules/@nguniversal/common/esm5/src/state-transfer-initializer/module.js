/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export function domContentLoadedFactory(doc) {
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
        NgModule({
            providers: [
                { provide: APP_INITIALIZER, multi: true, useFactory: domContentLoadedFactory, deps: [DOCUMENT] },
            ]
        })
    ], StateTransferInitializerModule);
    return StateTransferInitializerModule;
}());
export { StateTransferInitializerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9jb21tb24vc3JjL3N0YXRlLXRyYW5zZmVyLWluaXRpYWxpemVyL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxHQUFhO0lBQ25ELE9BQU8sY0FBTSxPQUFBLElBQUksT0FBTyxDQUFFLFVBQUMsT0FBTyxFQUFFLE9BQU87UUFDekMsSUFBTSxhQUFhLEdBQUc7WUFDcEIsR0FBRyxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzNELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDO1FBQ0YsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLGFBQWEsRUFBRTtZQUNyRSxPQUFPLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDTCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDLENBQUMsRUFWVyxDQVVYLENBQUM7QUFDTCxDQUFDO0FBUUQ7SUFBQTtJQUE2QyxDQUFDO0lBQWpDLDhCQUE4QjtRQUwxQyxRQUFRLENBQUM7WUFDUixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDO2FBQy9GO1NBQ0YsQ0FBQztPQUNXLDhCQUE4QixDQUFHO0lBQUQscUNBQUM7Q0FBQSxBQUE5QyxJQUE4QztTQUFqQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9tQ29udGVudExvYWRlZEZhY3RvcnkoZG9jOiBEb2N1bWVudCkge1xuICByZXR1cm4gKCkgPT4gbmV3IFByb21pc2UgKChyZXNvbHZlLCBfcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgY29udGVudExvYWRlZCA9ICgpID0+IHtcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY29udGVudExvYWRlZCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcbiAgICBpZiAoZG9jLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jLnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjb250ZW50TG9hZGVkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsIG11bHRpOiB0cnVlLCB1c2VGYWN0b3J5OiBkb21Db250ZW50TG9hZGVkRmFjdG9yeSwgZGVwczogW0RPQ1VNRU5UXX0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVUcmFuc2ZlckluaXRpYWxpemVyTW9kdWxlIHt9XG4iXX0=
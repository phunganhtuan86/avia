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
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/**
 * @param {?} doc
 * @return {?}
 */
export function domContentLoadedFactory(doc) {
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
export class StateTransferInitializerModule {
}
StateTransferInitializerModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: APP_INITIALIZER, multi: true, useFactory: domContentLoadedFactory, deps: [DOCUMENT] },
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9jb21tb24vc3JjL3N0YXRlLXRyYW5zZmVyLWluaXRpYWxpemVyL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFM0MsTUFBTSxVQUFVLHVCQUF1QixDQUFDLEdBQWE7SUFDbkQ7OztJQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksT0FBTzs7Ozs7SUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTs7Y0FDdkMsYUFBYTs7O1FBQUcsR0FBRyxFQUFFO1lBQ3pCLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMzRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQTtRQUNELElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxVQUFVLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxhQUFhLEVBQUU7WUFDckUsT0FBTyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0wsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQyxFQUFDLEVBQUM7QUFDTCxDQUFDO0FBUUQsTUFBTSxPQUFPLDhCQUE4Qjs7O1lBTDFDLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1QsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDO2lCQUMvRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUNvbnRlbnRMb2FkZWRGYWN0b3J5KGRvYzogRG9jdW1lbnQpIHtcbiAgcmV0dXJuICgpID0+IG5ldyBQcm9taXNlICgocmVzb2x2ZSwgX3JlamVjdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRMb2FkZWQgPSAoKSA9PiB7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNvbnRlbnRMb2FkZWQpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gICAgaWYgKGRvYy5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvYy5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY29udGVudExvYWRlZCk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCBtdWx0aTogdHJ1ZSwgdXNlRmFjdG9yeTogZG9tQ29udGVudExvYWRlZEZhY3RvcnksIGRlcHM6IFtET0NVTUVOVF19LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRlVHJhbnNmZXJJbml0aWFsaXplck1vZHVsZSB7fVxuIl19
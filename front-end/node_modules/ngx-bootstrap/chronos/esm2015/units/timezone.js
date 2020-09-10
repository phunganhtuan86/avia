/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { addFormatToken } from '../format/format';
// todo: add support for timezones
// FORMATTING
addFormatToken('z', null, null, function (date, opts) {
    return opts.isUTC ? 'UTC' : '';
});
addFormatToken('zz', null, null, function (date, opts) {
    return opts.isUTC ? 'Coordinated Universal Time' : '';
});
/**
 * @param {?} isUTC
 * @return {?}
 */
export function getZoneAbbr(isUTC) {
    return isUTC ? 'UTC' : '';
}
/**
 * @param {?} isUTC
 * @return {?}
 */
export function getZoneName(isUTC) {
    return isUTC ? 'Coordinated Universal Time' : '';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy90aW1lem9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFNbEQsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM1QixVQUFVLElBQVUsRUFBRSxJQUEwQjtJQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Q0FDaEMsQ0FBQyxDQUFDO0FBQ0wsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM3QixVQUFVLElBQVUsRUFBRSxJQUEwQjtJQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztDQUN2RCxDQUFDLENBQUM7Ozs7O0FBSUwsTUFBTSxzQkFBc0IsS0FBYztJQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztDQUMzQjs7Ozs7QUFFRCxNQUFNLHNCQUFzQixLQUFjO0lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Q0FDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIHRvZG86IGFkZCBzdXBwb3J0IGZvciB0aW1lem9uZXNcblxuLy8gRk9STUFUVElOR1xuYWRkRm9ybWF0VG9rZW4oJ3onLCBudWxsLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRzLmlzVVRDID8gJ1VUQycgOiAnJztcbiAgfSk7XG5hZGRGb3JtYXRUb2tlbignenonLCBudWxsLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRzLmlzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xuICB9KTtcblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Wm9uZUFiYnIoaXNVVEM6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGlzVVRDID8gJ1VUQycgOiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVOYW1lKGlzVVRDOiBib29sZWFuKSB7XG4gIHJldHVybiBpc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcbn1cbiJdfQ==
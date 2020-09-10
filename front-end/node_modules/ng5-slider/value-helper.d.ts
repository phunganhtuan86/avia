import { CustomStepDefinition } from './options';
/**
 *  Collection of functions to handle conversions/lookups of values
 */
export declare class ValueHelper {
    static linearValueToPosition(val: number, minVal: number, maxVal: number): number;
    static logValueToPosition(val: number, minVal: number, maxVal: number): number;
    static linearPositionToValue(percent: number, minVal: number, maxVal: number): number;
    static logPositionToValue(percent: number, minVal: number, maxVal: number): number;
    static findStepIndex(modelValue: number, stepsArray: CustomStepDefinition[]): number;
}

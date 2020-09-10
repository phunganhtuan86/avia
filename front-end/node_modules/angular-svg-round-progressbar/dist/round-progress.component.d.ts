import { OnChanges, NgZone, EventEmitter, ElementRef, SimpleChanges } from '@angular/core';
import { RoundProgressService } from './round-progress.service';
import { RoundProgressDefaults } from './round-progress.config';
import { RoundProgressEase } from './round-progress.ease';
export declare class RoundProgressComponent implements OnChanges {
    private _service;
    private _easing;
    private _defaults;
    private _ngZone;
    /** Reference to the underlying `path` node. */
    _path: ElementRef;
    /** Current value of the progress bar. */
    current: number;
    /** Maximum value of the progress bar. */
    max: number;
    /** Radius of the circle. */
    radius: number;
    /** Name of the easing function to use when animating. */
    animation: string;
    /** Time in millisconds by which to delay the animation. */
    animationDelay: number;
    /** Duration of the animation. */
    duration: number;
    /** Width of the circle's stroke. */
    stroke: number;
    /** Color of the circle. */
    color: string;
    /** Background color of the circle. */
    background: string;
    /** Whether the circle should take up the width of its parent. */
    responsive: boolean;
    /** Whether the circle is filling up clockwise. */
    clockwise: boolean;
    /** Whether to render a semicircle. */
    semicircle: boolean;
    /** Whether the tip of the progress should be rounded off. */
    rounded: boolean;
    /** Emits when a new value has been rendered. */
    onRender: EventEmitter<number>;
    private _lastAnimationId;
    constructor(_service: RoundProgressService, _easing: RoundProgressEase, _defaults: RoundProgressDefaults, _ngZone: NgZone);
    /** Animates a change in the current value. */
    private _animateChange;
    /** Sets the path dimensions. */
    private _setPath;
    /** Clamps a value between the maximum and 0. */
    private _clamp;
    /** Determines the SVG transforms for the <path> node. */
    getPathTransform(): string;
    /** Resolves a color through the service. */
    resolveColor(color: string): string;
    /** Change detection callback. */
    ngOnChanges(changes: SimpleChanges): void;
    /** Diameter of the circle. */
    _getDiameter(): number;
    /** The CSS height of the wrapper element. */
    _getElementHeight(): string;
    /** Viewbox for the SVG element. */
    _getViewBox(): string;
    /** Bottom padding for the wrapper element. */
    _getPaddingBottom(): string;
}

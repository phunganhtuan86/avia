import { ElementRef, Renderer2 } from '@angular/core';
/**
 * Wrapper to support legacy jqLite interface
 *
 * The aim is to slowly phase out the usage of this wrapper and replace
 * any manual DOM manipulations with Angular bindings
 */
export declare class JqLiteWrapper {
    private elemRef;
    private renderer;
    private eventListeners;
    constructor(elemRef: ElementRef, renderer: Renderer2);
    addClass(clazz: string): void;
    removeClass(clazz: string): void;
    hasClass(clazz: string): boolean;
    html(html: string): void;
    css(style: string, value: string): void;
    attr(attr: string, value: string): void;
    getBoundingClientRect(): ClientRect;
    focus(): void;
    on(eventName: string, callback: (event: any) => boolean | void): void;
    onPassive(eventName: string, callback: (event: any) => void): void;
    off(eventName?: string): void;
}

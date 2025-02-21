import { Dictionary } from "@jsplumb/util";
import { Component } from "@jsplumb/core";
import { PaintStyle } from './paint-style';
/**
 * @public
 */
export interface OverlayOptions extends Record<string, any> {
    id?: string;
    cssClass?: string;
    location?: number | number[];
    events?: Dictionary<(value: any, event?: any) => any>;
}
/**
 * @public
 */
export interface ArrowOverlayOptions extends OverlayOptions {
    width?: number;
    length?: number;
    direction?: number;
    foldback?: number;
    paintStyle?: PaintStyle;
}
/**
 * @public
 */
export interface LabelOverlayOptions extends OverlayOptions {
    label: string | Function;
    labelLocationAttribute?: string;
}
/**
 * @public
 */
export interface CustomOverlayOptions extends OverlayOptions {
    create: (c: Component) => any;
}
/**
 * @public
 */
export declare type FullOverlaySpec = {
    type: string;
    options: OverlayOptions;
};
/**
 * @public
 */
export declare type OverlaySpec = string | FullOverlaySpec;
//# sourceMappingURL=overlay.d.ts.map
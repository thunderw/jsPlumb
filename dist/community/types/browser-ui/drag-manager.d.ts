import { BrowserJsPlumbInstance } from "./browser-jsplumb-instance";
import { Dictionary, PointArray } from '@jsplumb/core';
import { Drag, DragHandlerOptions, GhostProxyGenerator } from "./collicat";
export declare const CLASS_DRAG_SELECTED = "jtk-drag-selected";
export declare const CLASS_DRAG_ACTIVE = "jtk-drag-active";
export declare const CLASS_DRAGGED = "jtk-dragged";
export declare const CLASS_DRAG_HOVER = "jtk-drag-hover";
export declare const ATTR_NOT_DRAGGABLE = "jtk-not-draggable";
export declare const EVENT_DRAG_MOVE = "drag:move";
export declare const EVENT_DRAG_STOP = "drag:stop";
export declare const EVENT_DRAG_START = "drag:start";
export declare const EVENT_MOUSEDOWN = "mousedown";
export declare const EVENT_MOUSEMOVE = "mousemove";
export declare const EVENT_MOUSEUP = "mouseup";
export declare const EVENT_REVERT = "revert";
export declare const EVENT_ZOOM = "zoom";
export declare const EVENT_CONNECTION_ABORT = "connection:abort";
export declare const EVENT_CONNECTION_DRAG = "connection:drag";
export interface DragHandler {
    selector: string;
    onStart: (params: DragStartEventParams) => boolean;
    onDrag: (params: DragEventParams) => void;
    onStop: (params: DragStopEventParams) => void;
    onDragInit: (el: Element) => Element;
    onDragAbort: (el: Element) => void;
    reset: () => void;
    init: (drag: Drag) => void;
    onBeforeStart?: (beforeStartParams: any) => void;
}
export interface GhostProxyingDragHandler extends DragHandler {
    useGhostProxy: (container: any, dragEl: Element) => boolean;
    makeGhostProxy?: GhostProxyGenerator;
}
export interface DragStartEventParams {
    e: MouseEvent;
    el: Element;
    finalPos?: PointArray;
    drag: Drag;
}
export interface DragEventParams extends DragStartEventParams {
    pos: PointArray;
}
export interface DragStopEventParams extends DragEventParams {
    finalPos: PointArray;
    selection: Array<any>;
}
export declare class DragManager {
    protected instance: BrowserJsPlumbInstance;
    private collicat;
    private drag;
    _draggables: Dictionary<any>;
    _dlist: Array<any>;
    _elementsWithEndpoints: Dictionary<any>;
    _draggablesForElements: Dictionary<any>;
    handlers: Array<DragHandler>;
    private _filtersToAdd;
    constructor(instance: BrowserJsPlumbInstance);
    addHandler(handler: DragHandler, dragOptions?: DragHandlerOptions): void;
    addFilter(filter: Function | string, exclude?: boolean): void;
    removeFilter(filter: Function | string): void;
    reset(): void;
}

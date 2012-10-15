module doh.robot{
export function _updateDocument () : any;
export function _resolveNode (n:String) : any;
export function _resolveNode (n:HTMLElement) : any;
export function _resolveNode (n:Function) : any;
export function _scrollIntoView (n:HTMLElement) : any;
export function _position (n:HTMLElement) : any;
export function _getWindowChain (n:HTMLElement) : any;
export function scrollIntoView (node:String,delay:any) : any;
export function scrollIntoView (node:HTMLElement,delay:any) : any;
export function scrollIntoView (node:Function,delay:any) : any;
export function mouseMoveAt (node:String,delay:any,duration:any,offsetX:any,offsetY:any) : any;
export function mouseMoveAt (node:HTMLElement,delay:any,duration:any,offsetX:any,offsetY:any) : any;
export function mouseMoveAt (node:Function,delay:any,duration:any,offsetX:any,offsetY:any) : any;
export function initRobot (url:String) : any;
export function waitForPageToLoad (submitActions:Function) : any;
export function _run (frame:any) : any;
}

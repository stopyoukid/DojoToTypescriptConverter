module dojo.io.iframe{
export var _currentDfd : Object;
export var _dfdQueue : any[];
export var _iframeName : String;
export function create (fname:String,onloadstr:String,uri?:String) : any;
export function setSrc (iframe:HTMLElement,src:String,replace:bool) : any;
export function doc (iframeNode:HTMLElement) : any;
}

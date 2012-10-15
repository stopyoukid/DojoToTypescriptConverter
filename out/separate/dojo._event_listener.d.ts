module dojo._event_listener{
export function add (node:HTMLElement,name:String,fp:Function) : any;
export function remove (node:HTMLElement,event:String,handle:any) : any;
export function _normalizeEventName (name:String) : any;
export function _fixCallback (name:String,fp:any) : any;
export function _fixEvent (evt:any,sender:any) : any;
export function _setKeyChar (evt:any) : any;
}

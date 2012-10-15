/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit.form._FormMixin.d.ts" />
/// <reference path="dijit._DialogMixin.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit{
export class _DialogBase extends dijit._Templated {
state : String;
_descendants : Object;
_childConnections : any[];
_childWatches : any[];
reset () : any;
validate () : any;
setValues (val:any) : any;
_setValueAttr (obj:Object) : any;
getValues () : any;
_getValueAttr () : any;
isValid () : any;
onValidStateChange (isValid:any) : any;
_getState () : any;
disconnectChildren () : any;
connectChildren (inStartup:bool) : any;
destroy () : any;
attributeMap : any;
_firstFocusItem : Object;
_lastFocusItem : Object;
execute (formContents:Object) : any;
onCancel () : any;
onExecute () : any;
_onSubmit () : any;
_getFocusItems () : any;
cssStateNodes : Object;
hovering : bool;
active : bool;
_mouseDown : Object;
_stateClasses : any;
_applyAttributes () : any;
_cssMouseEvent (event:any) : any;
_setStateClass () : any;
_trackMouseState (node:HTMLElement,clazz:String) : any;
baseClass : String;
open : bool;
duration : number;
refocus : bool;
autofocus : bool;
doLayout : bool;
draggable : bool;
_modalconnects : any[];
_relativePosition : Object;
_moveable : any;
_dndListener : Object;
underlayAttrs : Object;
_singleChildOriginalStyle : any;
_alreadyInitialized : Object;
_fadeInDeferred : Object;
_fadeOutDeferred : Object;
_scrollConnected : bool;
postMixInProperties () : any;
postCreate () : any;
onLoad () : any;
_endDrag (e:any) : any;
_setup () : any;
_size () : any;
_position () : any;
_onKey (evt:any) : any;
show () : any;
hide () : any;
layout () : any;
}
}

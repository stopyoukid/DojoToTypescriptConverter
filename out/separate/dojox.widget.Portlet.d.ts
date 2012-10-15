/// <reference path="Object.d.ts" />
/// <reference path="dijit.TitlePane.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.widget{
export class Portlet extends dijit.TitlePane {
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
resizeChildren : bool;
_parents : any[];
_size : Object;
closeIcon : Object;
_timer : Object;
_placeSettingsWidgets () : any;
_createIcon (clazz:any,hoverClazz:any,fn:any) : any;
onSizeChange (widget:any) : any;
_updateSize () : any;
onUpdateSize () : any;
_publish () : any;
}
}

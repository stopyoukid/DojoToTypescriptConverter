/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile{
export class IconContainer extends dijit._WidgetBase {
defaultIcon : String;
transition : String;
pressedIconOpacity : number;
iconBase : String;
iconPos : String;
back : String;
label : String;
single : bool;
_terminator : Object;
_addChild : any;
_setupSubNodes (ul:any) : any;
closeAll () : any;
addChild (widget:any) : any;
}
}

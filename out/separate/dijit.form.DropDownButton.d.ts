/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.Button.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Container.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._HasDropDown.d.ts" />
module dijit.form{
export class DropDownButton extends dijit.form.Button {
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
_buttonNode : HTMLElement;
_arrowWrapperNode : HTMLElement;
_popupStateNode : HTMLElement;
_aroundNode : HTMLElement;
autoWidth : bool;
forceWidth : bool;
maxHeight : number;
_stopClickEvents : bool;
_docHandler : Object;
_preparedNode : Object;
_explicitDDWidth : Object;
_explicitDDHeight : Object;
_opened : bool;
_onDropDownMouseDown (e:any) : any;
_onDropDownMouseUp (e?:any) : any;
_onDropDownClick (e:any) : any;
_onKey (e:any) : any;
isLoaded () : any;
loadDropDown (loadCallback:Function) : any;
toggleDropDown () : any;
openDropDown () : any;
closeDropDown (focus:bool) : any;
dropDownContainer : any;
dropDown : Object;
}
}

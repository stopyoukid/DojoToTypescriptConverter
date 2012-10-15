/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.RangeBoundTextBox.d.ts" />
/// <reference path="dijit._HasDropDown.d.ts" />
module dijit.form{
export class _DateTimeTextBox extends dijit.form.RangeBoundTextBox {
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
hasDownArrow : bool;
openOnClick : bool;
datePackage : String;
dropDownDefaultValue : any;
popupClass : String;
_selector : String;
dropDown : Object;
dateClassObj : Object;
dateLocaleModule : Object;
_invalidDate : Object;
_isInvalidDate (value:any) : any;
_setDropDownDefaultValueAttr (val:any) : any;
}
}

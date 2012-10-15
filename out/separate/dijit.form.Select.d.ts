/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormSelectWidget.d.ts" />
/// <reference path="dijit._HasDropDown.d.ts" />
module dijit.form{
export class Select extends dijit.form._FormSelectWidget {
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
required : bool;
state : String;
message : String;
tooltipPosition : any;
emptyLabel : String;
_isLoaded : bool;
_childrenLoaded : bool;
dropDown : Object;
_missingMsg : any;
_getMenuItemForOption (option:any) : any;
validate (isFocused:bool) : any;
isValid (isFocused:bool) : any;
}
}

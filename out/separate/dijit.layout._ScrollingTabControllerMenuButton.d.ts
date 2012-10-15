/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.Button.d.ts" />
/// <reference path="dijit._HasDropDown.d.ts" />
/// <reference path="dijit.layout._ScrollingTabControllerButtonMixin.d.ts" />
module dijit.layout{
export class _ScrollingTabControllerMenuButton extends dijit.form.Button {
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
containerId : String;
dropDown : Object;
}
}

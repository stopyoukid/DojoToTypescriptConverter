/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.ValidationTextBox.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._HasDropDown.d.ts" />
module dojox.form{
export class FilePickerTextBox extends dijit.form.ValidationTextBox {
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
searchDelay : number;
valueItem : any;
numPanes : number;
_skip : Object;
_hasValidPath : bool;
_menuFocus : any;
_allowBlur : Object;
_settingBlurValue : Object;
_hasSelection : bool;
_searchTimer : Object;
_onWidgetChange (item:any) : any;
_focusBlur (e:any) : any;
_focusFocus (e:any) : any;
_startSearchFromInput () : any;
}
}

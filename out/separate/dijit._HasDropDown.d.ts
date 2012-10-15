/// <reference path="Object.d.ts" />
module dijit{
export class _HasDropDown{
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
buildRendering () : any;
postCreate () : any;
destroy () : any;
_onKey (e:any) : any;
_onBlur () : any;
isLoaded () : any;
loadDropDown (loadCallback:Function) : any;
toggleDropDown () : any;
openDropDown () : any;
closeDropDown (focus:bool) : any;
}
}

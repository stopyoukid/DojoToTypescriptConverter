/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile.app{
export class _FormWidget extends dijit._WidgetBase {
name : String;
alt : String;
value : String;
type : String;
disabled : bool;
intermediateChanges : bool;
scrollOnFocus : bool;
attributeMap : Object;
nameAttrSetting : any;
_onChangeActive : bool;
_lastValue : any;
_resetValue : any;
_lastValueReported : any;
_onChangeHandle : Object;
_setDisabledAttr (value:bool) : any;
_onFocus (e:any) : any;
isFocusable () : any;
focus () : any;
compare (val1:any,val2:any) : any;
onChange (newValue:any) : any;
_handleOnChange (newValue:any,priorityChange?:bool) : any;
_onMouseDown (e:any) : any;
selectInputText (element:HTMLElement,start?:number,stop?:number) : any;
}
}

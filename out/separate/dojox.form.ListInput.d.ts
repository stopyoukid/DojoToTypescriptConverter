/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormValueWidget.d.ts" />
module dojox.form{
export class ListInput extends dijit.form._FormValueWidget {
inputClass : String;
inputHandler : String;
submitOnlyValidValue : bool;
useOnBlur : bool;
readOnlyInput : bool;
maxItems : number;
showCloseButtonWhenValid : bool;
showCloseButtonWhenInvalid : bool;
regExp : String;
delimiter : String;
constraints : any;
useAnim : bool;
duration : number;
easingIn : Function;
easingOut : Function;
readOnlyItem : bool;
useArrowForEdit : bool;
_items : any[];
_currentItem : dijit._Widget;
_input : dijit._Widget;
_count : number;
_setReadOnlyInputAttr (value:bool) : any;
_setReadOnlyItemAttr (value:bool) : any;
_createInputBox () : any;
add (values:String) : any;
_setReadOnlyWhenMaxItemsReached () : any;
_setSelectNode () : any;
_placeItem (node:HTMLElement) : any;
_getCursorPos (node:HTMLElement) : any;
_onItemClose (item:any) : any;
_onItemKeyDown (item:any,e:any) : any;
_editBefore (item:dijit._Widget) : any;
_editAfter (item:dijit._Widget) : any;
_onItemChange (item:any,value:String) : any;
_onItemEdit (item:any) : any;
_testItem (item:Object,value:String) : any;
_getValueAttr () : any;
_parseValue (newValue:String) : any;
regExpGen (constraints:any) : String;
_onHandler (value:String) : any;
_onClick (e:any) : any;
_focusInput () : any;
_inputOnKeyDown (e:any) : any;
_inputOnBlur () : any;
_getMatchedValueAttr () : any;
_getMismatchedValueAttr () : any;
_getValues (validator:Function) : any;
_nullValidator (itemValue:String) : any;
_matchValidator (itemValue:String) : any;
_mismatchValidator (itemValue:String) : any;
_getLastItemAttr () : any;
_getSomeItem (item:any,position:String) : any;
_getPreviousItem (item:any) : any;
_getNextItem (item:any) : any;
_destroyItem (item:any,updateValue?:bool) : any;
_updateValues () : any;
_destroyAllItems () : any;
}
}

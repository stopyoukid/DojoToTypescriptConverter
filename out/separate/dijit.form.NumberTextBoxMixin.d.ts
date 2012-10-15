module dijit.form{
export class NumberTextBoxMixin{
regExpGen : any;
constraints : any;
value : number;
_formatter (value:number,options?:any) : String;
_setConstraintsAttr (constraints:Object) : any;
_onFocus () : any;
format (value:number,constraints:any) : any;
_parser (value:String,constraints:any) : number;
parse (value:String,constraints:any) : any;
_getDisplayedValueAttr () : any;
filter (value:number) : any;
serialize (value:number,options?:Object) : any;
_setBlurValue () : any;
_setValueAttr (value:number,priorityChange?:bool,formattedValue?:String) : any;
_getValueAttr () : any;
isValid (isFocused:bool) : any;
}
}

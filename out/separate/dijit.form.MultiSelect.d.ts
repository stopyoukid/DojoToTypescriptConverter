/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormValueWidget.d.ts" />
module dijit.form{
export class MultiSelect extends dijit.form._FormValueWidget {
size : number;
multiple : Object;
addSelected (select:any) : any;
getSelected () : bool;
_getValueAttr () : any;
invertSelection (onChange:bool) : any;
_onChange (e:any) : any;
resize (size:Object) : any;
}
}

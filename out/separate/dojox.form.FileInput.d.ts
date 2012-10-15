/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormWidget.d.ts" />
module dojox.form{
export class FileInput extends dijit.form._FormWidget {
cancelText : String;
_listener : Object;
_keyListener : Object;
fileInput : Object;
_matchValue () : any;
setLabel (label:String,cssClass?:String) : any;
reset (e:any) : any;
}
}

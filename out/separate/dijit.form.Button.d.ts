/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormWidget.d.ts" />
module dijit.form{
export class Button extends dijit.form._FormWidget {
showLabel : bool;
_onClick (e:any) : any;
_onButtonClick (e:any) : any;
_setShowLabelAttr (val:any) : any;
_clicked (e:any) : any;
setLabel (content:String) : any;
_setLabelAttr (content:String) : any;
_setIconClassAttr (val:String) : any;
}
}

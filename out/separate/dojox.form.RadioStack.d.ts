/// <reference path="Object.d.ts" />
/// <reference path="dojox.form.CheckedMultiSelect.d.ts" />
/// <reference path="dojox.form._SelectStackMixin.d.ts" />
module dojox.form{
export class RadioStack extends dojox.form.CheckedMultiSelect {
stackId : String;
stackPrefix : String;
_savedValue : any;
_panes : Object;
_subscriptions : any[];
_paneIdFromOption (oVal:String) : String;
_optionValFromPane (id:String) : String;
_togglePane (pane:any,shown:bool) : any;
_connectTitle (pane:any,value:String) : any;
onAddChild (pane:any,insertIndex?:number) : any;
onRemoveChild (pane:any) : any;
onSelectChild (pane:any) : any;
onStartup (info:Object) : any;
_handleSelfOnChange (val:String) : any;
}
}

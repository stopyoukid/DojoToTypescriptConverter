module dojox.form{
export class _SelectStackMixin{
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
_setValueAttr (v:any) : any;
attr (name:String,value?:Object) : any;
onRemoveChild (pane:any) : any;
onSelectChild (pane:any) : any;
onStartup (info:Object) : any;
postMixInProperties () : any;
postCreate () : any;
destroy () : any;
_handleSelfOnChange (val:String) : any;
}
}

/// <reference path="Object.d.ts" />
module dojox.form.manager{
export class _Mixin{
watching : Object;
formWidgets : Object;
formNodes : Object;
startup () : any;
destroy () : any;
registerWidget (widget:String) : any;
unregisterWidget (name:String) : any;
registerWidgetDescendants (widget:String) : any;
unregisterWidgetDescendants (widget:String) : any;
formWidgetValue (elem:String,value?:Object) : any;
formPointValue (elem:String,value?:Object) : any;
inspectFormWidgets (inspector:Function,state?:Object,defaultValue?:Object) : Object;
inspectAttachedPoints (inspector:Function,state?:Object,defaultValue?:Object) : Object;
inspect (inspector:Function,state?:Object,defaultValue?:Object) : Object;
}
}

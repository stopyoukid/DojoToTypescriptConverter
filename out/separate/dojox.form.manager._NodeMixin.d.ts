/// <reference path="Object.d.ts" />
module dojox.form.manager{
export class _NodeMixin{
formNodes : Object;
destroy () : any;
registerNode (node:String) : any;
unregisterNode (name:String) : any;
registerNodeDescendants (node:String) : any;
unregisterNodeDescendants (node:String) : any;
formNodeValue (elem:String,value?:Object) : any;
inspectFormNodes (inspector:Function,state?:Object,defaultValue?:Object) : Object;
}
}

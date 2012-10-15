/// <reference path="Object.d.ts" />
/// <reference path="dijit.Declaration.d.ts" />
module dojox.widget{
export class Iterator extends dijit.Declaration {
start : number;
fetchMax : number;
attrs : Object;
defaultValue : String;
widgetCtor : Object;
dataValues : any[];
data : Object;
store : Object;
_srcIndex : number;
_srcParent : Object;
children : any[];
_classes : Object;
_setSrcIndex (s:any) : any;
clear () : any;
update () : any;
_addItem (config:Object,idx:any) : any;
getAttrValuesObj (item:any) : any;
onDataAvailable (data:any) : any;
fetch (query:any,start:any,end:any) : any;
}
}

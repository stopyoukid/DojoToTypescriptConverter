/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.wire.ml{
export class DataStore extends dijit._Widget {
storeClass : any;
store : Object;
_createStore () : any;
getFeatures () : Object;
fetch (request:Object) : Object;
save (args:Object) : any;
newItem (args:Object) : Object;
deleteItem (item:Object) : bool;
revert () : bool;
}
}

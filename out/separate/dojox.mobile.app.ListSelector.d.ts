/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.app._Widget.d.ts" />
module dojox.mobile.app{
export class ListSelector extends dojox.mobile.app._Widget {
data : any[];
controller : Object;
destroyOnHide : bool;
mask : Object;
onChoose () : any;
_setDataAttr (data:any) : any;
show (fromNode:any) : any;
hide () : any;
render () : any;
}
}

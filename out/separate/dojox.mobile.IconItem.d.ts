/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.AbstractItem.d.ts" />
module dojox.mobile{
export class IconItem extends dojox.mobile.AbstractItem {
lazy : bool;
requires : String;
timeout : number;
templateString : String;
templateStringSub : String;
createTemplate (s:any) : any;
setIcon () : any;
highlight () : any;
unhighlight () : any;
setOpacity (node:any,val:any) : any;
instantiateWidget (e:any) : any;
isOpen (e:any) : any;
onMouseDownIcon (e:any) : any;
iconClicked (e:any) : any;
closeIconClicked (e:any) : any;
open () : any;
_open_1 () : any;
close () : any;
onOpen () : any;
onClose () : any;
onError () : any;
}
}

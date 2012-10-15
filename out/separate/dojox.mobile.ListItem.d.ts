/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.AbstractItem.d.ts" />
module dojox.mobile{
export class ListItem extends dojox.mobile.AbstractItem {
rightText : String;
btnClass : String;
anchorLabel : bool;
noArrow : bool;
selected : bool;
anchorNode : Object;
btnNode : Object;
iconNode : Object;
setIcon () : any;
onClick (e:any) : any;
onAnchorLabelClicked (e:any) : any;
_setRightTextAttr (text:String) : any;
}
}

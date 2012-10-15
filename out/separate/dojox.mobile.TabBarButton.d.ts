/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.AbstractItem.d.ts" />
module dojox.mobile{
export class TabBarButton extends dojox.mobile.AbstractItem {
icon1 : String;
icon2 : Object;
iconPos1 : String;
iconPos2 : Object;
selected : Object;
tag : String;
selectOne : Object;
parent : any;
anchorNode : Object;
onClick (e:any) : any;
}
}

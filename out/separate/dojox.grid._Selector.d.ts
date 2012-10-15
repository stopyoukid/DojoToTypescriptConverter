/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid._View.d.ts" />
module dojox.grid{
export class _Selector extends dojox.grid._View {
inputType : String;
selectionMode : String;
padBorderWidth : number;
onSelected (inIndex:any) : any;
onDeselected (inIndex:any) : any;
}
}

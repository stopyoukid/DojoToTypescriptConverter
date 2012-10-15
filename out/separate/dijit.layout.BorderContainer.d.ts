/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout._LayoutWidget.d.ts" />
module dijit.layout{
export class BorderContainer extends dijit.layout._LayoutWidget {
design : String;
gutters : bool;
liveSplitters : bool;
persist : bool;
_splitterClass : String;
cs : Object;
getSplitter (region:String) : any;
_layoutChildren (changedChildId?:String,changedChildSize?:number) : any;
}
}

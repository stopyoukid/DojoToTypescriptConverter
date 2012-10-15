/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.AccordionContainer.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class AccordionContainer extends dijit.layout.AccordionContainer {
nls : Object;
_focusOnRemoveBtn : bool;
_titleHeight : any;
_modifyChild (child:any,isFirst:any) : any;
_hackHeight (toGrow:bool,heightDif:number) : any;
_setupTitleDom (child:any) : any;
}
}

module dojox.grid.cells{
export class _Base{
styles : String;
classes : String;
editable : bool;
alwaysEditing : bool;
formatter : Object;
defaultValue : String;
value : Object;
hidden : bool;
noresize : bool;
draggable : Object;
_valueProp : String;
_formatPending : bool;
unitWidth : any;
_props : Object;
_defaultFormat (inValue:any,callArgs:any) : any;
format (inRowIndex:number,inItem:any) : any;
formatEditing (inDatum:any,inRowIndex:number) : any;
getNode (inRowIndex:number) : any;
getHeaderNode () : any;
getEditNode (inRowIndex:any) : any;
canResize () : any;
isFlex () : any;
applyEdit (inValue:any,inRowIndex:any) : any;
cancelEdit (inRowIndex:any) : any;
_onEditBlur (inRowIndex:any) : any;
registerOnBlur (inNode:any,inRowIndex:any) : any;
needFormatNode (inDatum:any,inRowIndex:any) : any;
cancelFormatNode () : any;
_formatNode (inDatum:any,inRowIndex:any) : any;
formatNode (inNode:HTMLElement,inDatum:any,inRowIndex:number) : any;
dispatchEvent (m:any,e:any) : any;
getValue (inRowIndex:number) : any;
setValue (inRowIndex:number,inValue:any) : any;
focus (inRowIndex:number,inNode:HTMLElement) : any;
save (inRowIndex:number) : any;
restore (inRowIndex:number) : any;
_finish (inRowIndex:number) : any;
apply (inRowIndex:number) : any;
cancel (inRowIndex:number) : any;
markupFactory (node:any,cellDef:any) : any;
}
}

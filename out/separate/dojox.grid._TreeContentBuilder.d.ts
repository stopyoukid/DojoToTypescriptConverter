module dojox.grid{
export class _TreeContentBuilder{
view : any;
generateHtml (inDataIndex:any,inRowIndex:any) : String;
findTarget (inSource:any,inTag:any) : any;
getCellNode (inRowNode:any,inCellIndex:any) : any;
decorateEvent (e:any) : bool;
}
}

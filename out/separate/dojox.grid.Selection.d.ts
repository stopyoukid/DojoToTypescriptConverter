module dojox.grid{
export class Selection{
mode : String;
updating : number;
selectedIndex : number;
grid : any;
setMode (mode:any) : any;
onCanSelect (inIndex:any) : any;
onCanDeselect (inIndex:any) : any;
onSelected (inIndex:any) : any;
onDeselected (inIndex:any) : any;
onChanging () : any;
onChanged () : any;
isSelected (inIndex:any) : any;
getFirstSelected () : any;
getNextSelected (inPrev:any) : any;
getSelected () : any;
getSelectedCount () : any;
_beginUpdate () : any;
_endUpdate () : any;
select (inIndex:any) : any;
addToSelection (inIndex:any) : any;
deselect (inIndex:any) : any;
setSelected (inIndex:any,inSelect:any) : any;
toggleSelect (inIndex:any) : any;
_range (inFrom:any,inTo:any,func:any) : any;
selectRange (inFrom:any,inTo:any) : any;
deselectRange (inFrom:any,inTo:any) : any;
insert (inIndex:any) : any;
remove (inIndex:any) : any;
deselectAll (inExcept:any) : any;
clickSelect (inIndex:any,inCtrlKey:any,inShiftKey:any) : any;
clickSelectEvent (e:any) : any;
clear () : any;
}
}

/// <reference path="Object.d.ts" />
module dojox.grid{
export class _EditManager{
_boomerangWindow : number;
_catchBoomerang : String;
grid : any;
connections : any[];
destroy () : any;
cellFocus (inCell:any,inRowIndex:number) : any;
rowClick (e:any) : any;
styleRow (inRow:any) : any;
dispatchEvent (e:any) : any;
isEditing () : any;
isEditCell (inRowIndex:number,inCellIndex:number) : any;
isEditRow (inRowIndex:number) : any;
setEditCell (inCell:Object,inRowIndex:number) : any;
_focusEditor (inCell:any,inRowIndex:any) : any;
focusEditor () : any;
_shouldCatchBoomerang () : any;
_boomerangFocus () : any;
_doCatchBoomerang () : any;
start (inCell:any,inRowIndex:any,inEditing:any) : any;
_editorDo (inMethod:any) : any;
editorApply () : any;
editorCancel () : any;
applyCellEdit (inValue:any,inCell:any,inRowIndex:any) : any;
applyRowEdit () : any;
apply () : any;
cancel () : any;
save (inRowIndex:number,inView:Object) : any;
restore (inView:Object,inRowIndex:number) : any;
}
}

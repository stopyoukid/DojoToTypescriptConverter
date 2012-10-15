/// <reference path="Object.d.ts" />
module dojox.mdnd.dropMode{
export class OverDropMode{
_oldXPoint : number;
_oldYPoint : number;
_oldBehaviour : number;
_dragHandler : any[];
addArea (areas:any[],object:Object) : any[];
updateAreas (areaList:any[]) : any;
_updateArea (area:Object) : any;
initItems (area:Object) : any;
refreshItems (area:Object,indexItem:number,size:Object,added:bool) : any;
getDragPoint (coords:Object,size:Object,mousePosition:Object) : Object;
getTargetArea (areaList:any[],coords:Object,currentIndexArea:number) : number;
_checkInterval (areaList:any[],index:number,x:any,y:any) : bool;
getDropIndex (targetArea:Object,coords:Object) : number;
destroy () : any;
}
}

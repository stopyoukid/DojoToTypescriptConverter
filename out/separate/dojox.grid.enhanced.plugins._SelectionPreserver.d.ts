/// <reference path="Object.d.ts" />
module dojox.grid.enhanced.plugins{
export class _SelectionPreserver{
_connects : any[];
_selectedById : Object;
_trustSelection : any[];
_defaultSelected : bool;
selection : any;
grid : any;
destroy () : any;
connect (obj:any,event:any,method:any) : any;
reset () : any;
_reSelectById (item:any,index:any) : any;
_selectById (toSelect:any,inItemOrIndex:any) : any;
onSelectedById (id:any,rowIndex:any,value:any) : any;
_updateMapping (trustSelection:any,isSelect:any,isForAll:any,from:any,to:any) : any;
}
}

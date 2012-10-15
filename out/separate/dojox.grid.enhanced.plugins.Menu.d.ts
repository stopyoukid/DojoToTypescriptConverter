/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class Menu extends dojox.grid.enhanced._Plugin {
types : any[];
_initMenu (menuType:String,menu:String) : any;
_getMenuWidget (menu:String) : any;
_setRowMenuAttr (menu:any) : any;
_setCellMenuAttr (menu:any) : any;
_setSelectedRegionMenuAttr (menu:any) : any;
_setMenuAttr (menu:any,menuType:String) : any;
showMenu (e:any) : any;
}
}

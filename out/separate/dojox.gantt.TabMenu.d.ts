/// <reference path="Object.d.ts" />
module dojox.gantt{
export class TabMenu{
tabPanelDlgId : Object;
paneActionBar : Object;
ok : Object;
cancel : Object;
isShow : bool;
ganttChart : any;
arrTabs : any[];
buildContent () : any;
createMenuPanel () : any;
createTabPanel () : any;
addItemMenuPanel (tab:any) : any;
show (elem:any,object:any) : any;
hide () : any;
clear () : any;
createTab (id:any,desc:any,type:any,showOInfo:any,menu:any,withDefaultValue:any) : any;
}
}

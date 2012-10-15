module dojox.gantt{
export class GanttResourceItem{
ownerItem : any[];
ownerNameItem : any[];
ownerTaskNodeMapping : Object;
ownerTaskNodeMapping_time : Object;
resourceInfo : Object;
ownerTimeConsume : Object;
tableControl : Object;
contentHeight : any;
contentWidth : any;
panelNames : Object;
content : Object;
ganttChart : any;
clearAll () : any;
clearData () : any;
clearItems () : any;
buildResource () : any;
buildOwnerTimeConsume () : any;
refresh () : any;
reConstruct () : any;
create () : any;
postAdjustment () : any;
refreshOwnerEntry (owner:any) : any;
createOwnerEntry (owner:any) : any;
createOwnerNameItem (owner:any,posY:any) : any;
refreshOwnerItem (owner:any) : any;
createOwnerItem (owner:any,posY:any) : any;
refreshDetailedTaskEntry (owner:any,item:any,task:any) : any;
createDetailedTaskEntry (owner:any,parentNode:any,task:any) : any;
createTaskNameItem (owner:any,posY:any) : any;
refreshTaskItem (item:any,task:any) : any;
createTaskItem (task:any,posY:any) : any;
createConnectingLinesPN (parentNode:any,currentNode:any) : any;
createTreeImg (ownerNameItem:any) : any;
styleOwnerItem (tItem:any,owner:any,displayType:any,topOffset:any) : any;
checkWidthTaskNameItem (taskNameItem:any) : any;
createPanelOwners () : any;
createPanelNamesOwners () : any;
}
}

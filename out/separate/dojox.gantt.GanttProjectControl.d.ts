/// <reference path="Object.d.ts" />
module dojox.gantt{
export class GanttProjectControl{
percentage : number;
posX : number;
posY : number;
duration : number;
nextProject : Object;
previousProject : Object;
arrTasks : any[];
checkWidthProjectNameItem () : any;
refreshProjectItem (projectItem:any) : any;
refreshDescrProject (divDesc:any) : any;
postLoadData () : any;
refresh () : any;
create () : any;
getTaskById (id:any) : any;
searchTaskInTree (task:any,id:any) : any;
shiftProjectItem () : any;
adjustPanelTime () : any;
resizeProjectItem (width:any) : any;
shiftDescrProject () : any;
showDescrProject () : any;
hideDescrProject () : any;
getDescStr () : any;
createDescrProject () : any;
createProjectItem () : any;
createProjectNameItem () : any;
getPercentCompleted () : any;
getDuration () : any;
deleteTask (id:any) : any;
setName (name:any) : any;
setPercentCompleted (percentage:any) : any;
deleteChildTask (task:any) : any;
insertTask (id:any,name:any,startTime:any,duration:any,percentage:any,previousTaskId:any,taskOwner:any,parentTaskId:any) : any;
shiftNextProject (project:any,height:any) : any;
shiftProject (height:any) : any;
shiftTask (task:any,height:any) : any;
shiftNextParentTask (task:any,height:any) : any;
shiftChildTasks (task:any,height:any) : any;
}
}

/// <reference path="Object.d.ts" />
module dojox.gantt{
export class GanttProjectItem{
id : any;
name : Object;
startDate : Object;
parentTasks : any[];
getTaskById (id:any) : any;
getTaskByIdInTree (parentTask:any,id:any) : any;
addTask (task:any) : any;
deleteTask (id:any) : any;
}
}

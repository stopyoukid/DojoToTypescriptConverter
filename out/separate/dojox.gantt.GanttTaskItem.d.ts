/// <reference path="Object.d.ts" />
module dojox.gantt{
export class GanttTaskItem{
project : Object;
id : any;
name : Object;
startTime : Object;
duration : number;
percentage : number;
previousTaskId : String;
taskOwner : String;
cldTasks : any[];
cldPreTasks : any[];
parentTask : Object;
previousTask : Object;
nextChildTask : Object;
previousChildTask : Object;
nextParentTask : Object;
previousParentTask : Object;
addChildTask (task:any) : any;
setProject (project:any) : any;
}
}

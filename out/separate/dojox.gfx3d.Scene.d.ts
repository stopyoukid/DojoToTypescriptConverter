/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx3d.Object.d.ts" />
module dojox.gfx3d{
export class Scene extends dojox.gfx3d.Object {
todos : any[];
objects : any[];
schedule : any;
_draw : any;
addTodo (newObject:any) : any;
}
}

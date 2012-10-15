module dojox.gfx3d{
export class Viewport{
camera : Object;
lights : any[];
lighting : Object;
deep : bool;
todos : any[];
dimension : Object;
objects : any[];
renderer : Object;
schedule : any;
draw : any;
nodeType : any;
setCameraTransform (matrix:any) : any;
applyCameraRightTransform (matrix:any) : any;
applyCameraLeftTransform (matrix:any) : any;
applyCameraTransform (matrix:any) : any;
setLights (lights:any[],ambient:any,specular:any) : any;
addLights (lights:any[]) : any;
addTodo (newObject:any) : any;
invalidate () : any;
setDimensions (dim:any) : any;
render () : any;
}
}

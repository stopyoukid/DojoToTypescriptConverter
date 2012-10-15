module dojox.sketch{
export class _Plugin{
figure : Object;
iconClassPrefix : String;
itemGroup : String;
button : Object;
queryCommand : Object;
shape : String;
useDefaultCommand : Object;
buttonClass : any;
_connects : any[];
_initButton () : any;
attr (name:any,value:any) : any;
onActivate () : any;
activate (e:any) : any;
onMouseDown (e:any) : any;
onMouseMove (e:any) : any;
onMouseUp (e:any) : any;
destroy (f:any) : any;
connect (o:any,f:any,tf:any) : any;
setFigure (figure:any) : any;
setToolbar (toolbar:any) : any;
}
}

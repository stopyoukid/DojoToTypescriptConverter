module dojox.gfx.shape{
export class Surface{
_nodes : any[];
_events : any[];
rawNode : Object;
isLoaded : Object;
destroy () : any;
getEventSource () : HTMLElement;
_getRealMatrix () : any;
onLoad (surface:any) : any;
whenLoaded (context?:Object,method?:Function) : any;
}
}

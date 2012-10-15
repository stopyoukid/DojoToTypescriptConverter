module dojox.grid.enhanced{
export class _Plugin{
name : String;
grid : Object;
option : Object;
_connects : any[];
_subscribes : any[];
privates : Object;
init () : any;
onPreInit () : any;
onPostInit () : any;
onStartUp () : any;
connect (obj:any,event:any,method:any) : any;
disconnect (handle:any) : any;
subscribe (topic:any,method:any) : any;
unsubscribe (handle:any) : any;
onSetStore (store:any) : any;
destroy () : any;
}
}

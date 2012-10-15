module dojox.timing{
export class Timer{
timer : Object;
isRunning : bool;
interval : any;
onStart : Object;
onStop : Object;
onTick () : any;
}
}

module dojo.dnd{
export class Manager{
OFFSET_X : number;
OFFSET_Y : number;
target : Object;
canDropFlag : bool;
source : Object;
nodes : any[];
copy : Object;
avatar : Object;
events : any[];
overSource (source:Object) : any;
outSource (source:Object) : any;
startDrag (source:Object,nodes:any[],copy:bool) : any;
stopDrag () : any;
makeAvatar () : any;
updateAvatar () : any;
onMouseMove (e:any) : any;
onMouseUp (e:any) : any;
onKeyDown (e:any) : any;
onKeyUp (e:any) : any;
_setCopyStatus (copy:bool) : any;
}
}

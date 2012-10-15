module dojox.collections{
export class Queue{
count : Object;
clear () : any;
clone () : any;
contains (o:any) : bool;
copyTo (arr:any[],i:number) : any;
dequeue () : any;
enqueue (o:any) : any;
forEach (fn:Function,scope?:any) : any;
getIterator () : any;
peek () : any;
toArray () : any;
}
}

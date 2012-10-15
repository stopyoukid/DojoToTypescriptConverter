module dojox.collections{
export class Stack{
count : Object;
clear () : any;
clone () : any;
contains (o:any) : bool;
copyTo (arr:any[],i:number) : any;
forEach (fn:Function,scope?:any) : any;
getIterator () : any;
peek () : any;
pop () : any;
push (o:any) : any;
toArray () : any[];
}
}

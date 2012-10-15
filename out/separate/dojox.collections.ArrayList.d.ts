module dojox.collections{
export class ArrayList{
count : number;
add (obj:any) : any;
addRange (a:any[]) : any;
clear () : any;
clone () : any;
contains (obj:any) : bool;
forEach (fn:Function,scope?:any) : any;
getIterator () : any;
indexOf (obj:any) : number;
insert (i:number,obj:any) : any;
item (i:number) : any;
remove (obj:any) : any;
removeAt (i:number) : any;
reverse () : any;
sort (fn?:Function) : any;
setByIndex (i:number,obj:any) : any;
toArray () : any;
}
}

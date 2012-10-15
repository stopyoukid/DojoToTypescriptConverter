module dojox.collections{
export class Dictionary{
count : number;
add (k:String,v:any) : any;
clear () : any;
clone () : any;
contains () : any;
containsKey (k:String) : bool;
containsValue (v:any) : bool;
entry (k:String) : any;
forEach (fn:Function,scope?:any) : any;
getKeyList () : any;
getValueList () : any;
item (k:String) : any;
getIterator () : any;
remove (k:String) : bool;
}
}

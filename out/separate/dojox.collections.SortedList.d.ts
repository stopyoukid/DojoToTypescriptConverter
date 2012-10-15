/// <reference path="Object.d.ts" />
module dojox.collections{
export class SortedList{
count : Object;
add (k:String,v:any) : any;
clear () : any;
clone () : any;
contains () : any;
containsKey (k:String) : bool;
containsValue (o:any) : bool;
copyTo (arr:any[],i:number) : any;
entry (k:String) : any;
forEach (fn:Function,scope?:any) : any;
getByIndex (i:number) : any;
getIterator () : any;
getKey (i:number) : any;
getKeyList () : any[];
getValueList () : any[];
indexOfKey (k:String) : number;
indexOfValue (o:any) : number;
item (k:String) : any;
remove (k:String) : any;
removeAt (i:number) : any;
replace (k:String,v:any) : bool;
setByIndex (i:number,o:any) : any;
}
}

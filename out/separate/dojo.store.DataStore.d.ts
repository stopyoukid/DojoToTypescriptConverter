/// <reference path="Object.d.ts" />
module dojo.store{
export class DataStore{
target : String;
store : any;
_objectConverter (callback:any) : any;
get (id?:Object,options?:any) : any;
put (object:Object,options?:Object) : any;
remove (id:Object) : any;
query (query:Object,options?:Object) : any;
getIdentity (object:Object) : any;
}
}

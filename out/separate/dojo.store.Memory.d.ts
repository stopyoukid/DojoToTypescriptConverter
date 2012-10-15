module dojo.store{
export class Memory{
idProperty : String;
index : Object;
queryEngine () : any;
get (id:number) : any;
getIdentity (object:Object) : any;
put (object:Object,options?:Object) : any;
add (object:Object,options?:Object) : any;
remove (id:number) : any;
query (query:Object,options?:any) : any;
setData (data:any) : any;
}
}

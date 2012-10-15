module dojo.store{
export class JsonRest{
target : String;
idProperty : String;
get (id:number,options:any) : any;
getIdentity (object:Object) : any;
put (object:Object,options?:Object) : any;
add (object:Object,options?:Object) : any;
remove (id:number) : any;
query (query:Object,options?:any) : any;
}
}

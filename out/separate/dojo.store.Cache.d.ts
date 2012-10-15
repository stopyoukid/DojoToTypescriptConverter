/// <reference path="Object.d.ts" />
module dojo.store{
export class Cache{
query (query:Object,directives?:any) : any;
get (id:number,directives?:any) : any;
add (object:Object,directives?:any) : any;
put (object:Object,directives?:any) : any;
remove (id:number,directives?:any) : any;
evict (id:number) : any;
}
}

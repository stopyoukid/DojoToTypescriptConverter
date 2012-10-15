module dojo{
export class AdapterRegistry{
pairs : any[];
returnWrappers : bool;
register (name:String,check:Function,wrap:Function,directReturn?:bool,override?:bool) : any;
match () : any;
unregister (name:any) : any;
}
}

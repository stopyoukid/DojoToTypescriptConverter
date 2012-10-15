module dojox.uuid{
export class Uuid{
_uuidString : Object;
_ourGenerator : any;
compare (uuidOne:any,uuidTwo:any,otherUuid:any) : any;
setGenerator (generator?:Function) : any;
getGenerator () : any;
isEqual (otherUuid:any) : bool;
isValid () : any;
getVariant () : any;
}
}

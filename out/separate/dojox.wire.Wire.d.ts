module dojox.wire{
export class Wire{
_wireClass : String;
converter : any;
getValue (defaultObject:Object) : any;
setValue (value:any,defaultObject:Object) : any;
_getPropertyValue (object:Object,property:String) : any;
_setPropertyValue (object:Object,property:String,value:any) : any;
_useGet (object:any) : any;
_useSet (object:any) : any;
_useAttr (object:any) : any;
}
}

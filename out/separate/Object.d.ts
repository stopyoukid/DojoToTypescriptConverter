/// <reference path="Object.d.ts" />
interface Object{
freeze () : any;
inherited (name?:String,args?:IArguments,newArgs?:Object) : Object;
inherited (name?:IArguments,args?:IArguments,newArgs?:Object) : Object;
getInherited (name?:String,args?:IArguments) : Object;
isInstanceOf (cls:Function) : Object;
extend (source:Object) : any;
}

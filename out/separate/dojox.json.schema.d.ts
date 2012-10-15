/// <reference path="Object.d.ts" />
module dojox.json.schema{
export function validate (instance:any,schema:Object) : any;
export function checkPropertyChange (value:any,schema:Object,property:String) : any;
export function mustBeValid (result:any) : any;
export function _validate (instance:any,schema:Object,_changing:bool) : any;
}

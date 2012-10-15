module dojox.date.islamic.locale{
export var weekDays : Object;
export var months : Object;
export function format (dateObject:any,options?:Object) : String;
export function regexp (options?:any) : String;
export function _parseInfo (options?:any) : any;
export function parse (value:String,options?:Object) : any;
export function addCustomFormats (packageName:String,bundleName:String) : any;
export function _getIslamicBundle (locale:String) : any;
export function getNames (item:String,type:String,context?:String,locale?:String,date?:any) : any;
}

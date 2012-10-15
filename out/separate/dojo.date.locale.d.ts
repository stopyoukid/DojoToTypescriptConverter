module dojo.date.locale{
export function _getZone (dateObject:any,getName:bool,options?:any) : any;
export function format (dateObject:any,options?:any) : String;
export function regexp (options?:any) : String;
export function _parseInfo (options?:any) : any;
export function parse (value:String,options?:any) : any;
export function addCustomFormats (packageName:String,bundleName:String) : any;
export function _getGregorianBundle (locale:String) : any;
export function getNames (item:String,type:String,context?:String,locale?:String) : any;
export function isWeekend (dateObject?:any,locale?:String) : bool;
export function _getDayOfYear (dateObject:any) : number;
export function _getWeekOfYear (dateObject:any,firstDayOfWeek:number) : number;
}

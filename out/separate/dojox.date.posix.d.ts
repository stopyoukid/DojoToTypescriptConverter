/// <reference path="Object.d.ts" />
module dojox.date.posix{
export function strftime (dateObject:any,format:String,locale?:String) : String;
export function getStartOfWeek (dateObject:any,firstDay:number) : any;
export function setIsoWeekOfYear (dateObject:any,week:number) : any;
export function getIsoWeekOfYear (dateObject:any) : number;
export function getIsoWeeksInYear (dateObject:any) : number;
}

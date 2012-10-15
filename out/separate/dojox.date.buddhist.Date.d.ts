/// <reference path="Object.d.ts" />
module dojox.date.buddhist{
export class Date{
_date : Object;
_month : number;
_year : number;
_hours : Object;
_minutes : Object;
_seconds : Object;
_milliseconds : Object;
_day : Object;
getDate (isNumber?:bool) : any;
getMonth () : any;
getFullYear () : any;
getHours () : any;
getMinutes () : any;
getSeconds () : any;
getMilliseconds () : any;
setDate (date:number) : any;
setFullYear (year:number,month?:number,date?:number) : any;
setMonth (month:number) : any;
setHours () : any;
setMinutes (minutes:number) : any;
setSeconds (seconds:number) : any;
setMilliseconds (milliseconds:number) : any;
_getDaysInMonth (month:number,year:number) : any;
fromGregorian (gdate:any) : any;
toGregorian () : any;
getDay () : number;
}
}

/// <reference path="Object.d.ts" />
module dojox.date.hebrew{
export class Date{
_MONTH_LENGTH : any[];
_MONTH_START : any[];
_LEAP_MONTH_START : any[];
_GREGORIAN_MONTH_COUNT : any[];
_date : Object;
_month : number;
_year : String;
_hours : Object;
_minutes : Object;
_seconds : Object;
_milliseconds : Object;
_day : number;
getDate () : number;
getDateLocalized (locale?:String) : any;
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
_setDay () : any;
getDaysInHebrewMonth (month:number,year:number) : any;
_yearType (year:number) : any;
_handleGetYearLength (eyear:number) : any;
_startOfYear (year:number) : any;
isLeapYear (year:number) : any;
fromGregorian (gdate:any) : any;
_computeHebrewFields (gdate:any) : any;
toGregorian () : any;
_floorDivide (numerator:any,denominator:any,remainder:any) : any;
getDay () : any;
_getJulianDayFromGregorianDate (gdate:any) : any;
}
}

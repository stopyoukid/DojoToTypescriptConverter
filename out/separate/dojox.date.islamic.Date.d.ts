module dojox.date.islamic{
export class Date{
_date : Object;
_month : Object;
_year : String;
_hours : Object;
_minutes : Object;
_seconds : Object;
_milliseconds : Object;
_day : Object;
_GREGORIAN_EPOCH : number;
_ISLAMIC_EPOCH : number;
getDate () : any;
getMonth () : any;
getFullYear () : any;
getDay () : any;
getHours () : any;
getMinutes () : any;
getSeconds () : any;
getMilliseconds () : any;
setDate (date:number) : any;
setFullYear (year:number) : any;
setMonth (month:number) : any;
setHours () : any;
setMinutes (minutes:number) : any;
setSeconds (seconds:number) : any;
setMilliseconds (milliseconds:number) : any;
toGregorian () : any;
fromGregorian (gdate:any) : any;
_yearStart (year:number) : any;
_monthStart (year:number,month:number) : any;
_civilLeapYear (year:number) : any;
getDaysInIslamicMonth (month:number,year:number) : any;
_mod (a:any,b:any) : any;
}
}

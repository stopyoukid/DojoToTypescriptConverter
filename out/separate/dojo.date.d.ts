module dojo.date{
export function getDaysInMonth (dateObject:any) : number;
export function isLeapYear (dateObject:any) : bool;
export function getTimezoneName (dateObject:any) : String;
export function compare (date1:any,date2?:any,portion?:String) : number;
export function add (date:any,interval:String,amount:number) : any;
export function difference (date1:any,date2?:any,interval?:String) : any;
}

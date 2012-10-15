module dojo.regexp{
export function escapeString (str:String,except?:String) : any;
export function buildGroupRE (arr:Object,re:Function,nonCapture?:bool) : String;
export function buildGroupRE (arr:any[],re:Function,nonCapture?:bool) : String;
export function group (expression:String,nonCapture?:bool) : String;
}

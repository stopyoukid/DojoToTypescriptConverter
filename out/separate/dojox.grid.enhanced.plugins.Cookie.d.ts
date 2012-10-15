/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class Cookie extends dojox.grid.enhanced._Plugin {
_cookieEnabled : bool;
_cookieHandlers : any[];
_cookie : Object;
_cookieStartedup : Object;
cookieProps : any;
_mixinGrid () : any;
_saveCookie () : any;
addCookieHandler (args:Object) : any;
removeCookie () : any;
setCookieEnabled (cookieName?:String,enabled?:bool) : any;
getCookieEnabled (cookieName?:String) : any;
}
}

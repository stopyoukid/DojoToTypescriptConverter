/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget.Portlet.d.ts" />
module dojox.widget{
export class FeedPortlet extends dojox.widget.Portlet {
local : bool;
maxResults : number;
url : String;
openNew : bool;
showFeedTitle : Object;
store : any;
_resultList : Object;
onFeedError () : any;
_getTitle (item:any) : any;
_getLink (item:any) : any;
_getContent (item:any) : any;
_setUrlAttr (url:any) : any;
load () : any;
generateResults (items:any) : any;
}
}

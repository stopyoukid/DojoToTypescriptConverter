/// <reference path="Object.d.ts" />
/// <reference path="dojox.image.Badge.d.ts" />
module dojox.image{
export class FlickrBadge extends dojox.image.Badge {
userid : String;
username : String;
setid : String;
tags : String;
searchText : String;
target : String;
apikey : String;
_store : Object;
}
}

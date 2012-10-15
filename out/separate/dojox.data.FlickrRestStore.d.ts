/// <reference path="Object.d.ts" />
/// <reference path="dojox.data.FlickrStore.d.ts" />
module dojox.data{
export class FlickrRestStore extends dojox.data.FlickrStore {
_id : number;
_requestCount : number;
_flickrRestUrl : String;
_apikey : String;
_cache : any[];
_prevRequests : Object;
_handlers : Object;
_prevRequestRanges : any[];
_maxPhotosPerUser : Object;
_checkPrevRanges (primaryKey:any,start:any,count:any) : any;
}
}

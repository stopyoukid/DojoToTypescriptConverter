/// <reference path="Object.d.ts" />
/// <reference path="dojox.data.GoogleSearchStore.d.ts" />
module dojox.data{
export class GoogleFeedStore extends dojox.data.GoogleSearchStore {
_feedMetaData : Object;
getFeedValue (attribute:any,defaultValue:any) : any;
getFeedValues (attribute:any,defaultValue:any) : any;
}
}

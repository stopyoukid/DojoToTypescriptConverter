/// <reference path="Object.d.ts" />
/// <reference path="dojox.data.JsonRestStore.d.ts" />
module dojox.data{
export class CouchDBRestStore extends dojox.data.JsonRestStore {
getStores (couchServerUrl:any) : any;
}
}

/// <reference path="Object.d.ts" />
/// <reference path="dojox.data.JsonQueryRestStore.d.ts" />
module dojox.data{
export class PersevereStore extends dojox.data.JsonQueryRestStore {
getStores (path?:String,sync?:bool) : any;
addProxy () : any;
}
}

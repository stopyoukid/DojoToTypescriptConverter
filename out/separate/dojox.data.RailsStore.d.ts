/// <reference path="Object.d.ts" />
/// <reference path="dojox.data.JsonRestStore.d.ts" />
module dojox.data{
export class RailsStore extends dojox.data.JsonRestStore {
rootAttribute : bool;
preamble (options:any) : any;
}
}

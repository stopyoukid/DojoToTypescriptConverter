/// <reference path="Object.d.ts" />
/// <reference path="dojo.data.api.Read.d.ts" />
module dojo.data.api{
export class Identity extends dojo.data.api.Read {
getIdentity (item:any) : String;
getIdentityAttributes (item:any) : String;
fetchItemByIdentity (keywordArgs:any) : any;
}
}

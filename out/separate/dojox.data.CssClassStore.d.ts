/// <reference path="Object.d.ts" />
/// <reference path="dojox.data.CssRuleStore.d.ts" />
module dojox.data{
export class CssClassStore extends dojox.data.CssRuleStore {
_idAttribute : String;
_handleFetchByIdentityReturn (request:any) : any;
getIdentity (item:any) : any;
getIdentityAttributes (item:any) : any;
fetchItemByIdentity (request:any) : any;
}
}

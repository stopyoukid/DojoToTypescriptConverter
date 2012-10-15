module dojox.charting{
export class DataSeries{
series : any;
_inFlight : bool;
items : any;
data : any[];
itemMap : any;
store : Object;
kwArgs : Object;
value : any;
_events : any[];
destroy () : any;
setSeriesObject (series:any) : any;
_dictValue (keys:any,dict:any,store:any,item:any) : any;
_fieldValue (field:any,store:any,item:any) : any;
_defaultValue (store:any,item:any) : any;
fetch () : any;
_onFetchComplete (items:any,request:any) : any;
onFetchError (errorData:any,request:any) : any;
_buildItemMap () : any;
_pushDataChanges () : any;
_onStoreNew () : any;
_onStoreDelete (item:any) : any;
_onStoreSet (item:any) : any;
}
}

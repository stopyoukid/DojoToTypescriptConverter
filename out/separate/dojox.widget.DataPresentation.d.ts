module dojox.widget{
export class DataPresentation{
type : String;
chartType : String;
reverse : bool;
animate : Object;
labelMod : number;
legendHorizontal : bool;
url : Object;
urlContent : Object;
refreshInterval : Object;
refreshIntervalPending : Object;
data : Object;
preparedstore : Object;
query : Object;
queryOptions : Object;
chartWidget : Object;
legendWidget : Object;
gridWidget : Object;
domNode : Object;
theme : Object;
setURL (url?:String,urlContent?:Object,refreshInterval?:number) : any;
setData (data?:Object,refreshInterval?:number) : any;
refresh () : any;
cancelRefresh () : any;
setStore (store?:Object,query?:String,queryOptions?:Object) : any;
setPreparedStore (store?:Object,query?:String,queryOptions?:Object) : any;
renderChartWidget () : any;
renderGridWidget () : any;
getChartWidget () : any;
getGridWidget () : any;
destroy () : any;
}
}

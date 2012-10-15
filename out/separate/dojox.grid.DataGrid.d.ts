/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid._Grid.d.ts" />
module dojox.grid{
export class DataGrid extends dojox.grid._Grid {
store : Object;
query : Object;
queryOptions : Object;
fetchText : String;
sortFields : Object;
updateDelay : number;
items : Object;
_store_connects : any[];
_by_idty : Object;
_cache : any[];
_pages : any[];
_pending_requests : Object;
_bop : number;
_eop : String;
_requests : number;
_isLoaded : bool;
_isLoading : bool;
_endUpdateDelay : Object;
_addingItem : bool;
_canEdit : any;
_hasIdentity : bool;
_skipRowRenormalize : bool;
_lastScrollTop : any;
_checkUpdateStatus () : any;
_onSet (item:any,attribute:any,oldValue:any,newValue:any) : any;
_createItem (item:any,index:any) : any;
_addItem (item:any,index:any,noUpdate:any) : any;
_onNew (item:any,parentInfo:any) : any;
_onDelete (item:any) : any;
_onRevert () : any;
setStore (store:any,query:any,queryOptions:any) : any;
setQuery (query:any,queryOptions:any) : any;
setItems (items:any) : any;
_setQuery (query:any,queryOptions:any) : any;
_setStore (store:any) : any;
_onFetchBegin (size:any,req:any) : any;
_onFetchComplete (items:any,req:any) : any;
_onFetchError (err:any,req:any) : any;
onFetchError (err:any,req:any) : any;
_clearData () : any;
getItemIndex (item:any) : any;
_getItemIndex (item:any,isDeleted:any) : any;
filter (query:any,reRender:any) : any;
_getItemAttr (idx:any,attr:any) : any;
_requestsPending (inRowIndex:any) : any;
_rowToPage (inRowIndex:any) : any;
_pageToRow (inPageIndex:any) : any;
_preparePage (inRowIndex:any) : any;
_needPage (inPageIndex:any) : any;
_requestPage (inPageIndex:any) : any;
_refresh (isRender:any) : any;
getSortProps () : any;
styleRowState (inRow:any) : any;
canEdit (inCell:any,inRowIndex:any) : any;
_copyAttr (idx:any,attr:any) : any;
cell_markupFactory (cellFunc:any,node:any,cellDef:any) : any;
}
}

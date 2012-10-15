/// <reference path="Object.d.ts" />
/// <reference path="dijit.tree.ForestStoreModel.d.ts" />
module dojox.grid{
export class LazyTreeGridStoreModel extends dijit.tree.ForestStoreModel {
serverStore : bool;
childrenSize : number;
_isChildrenLoaded (parentItem:any) : any;
}
}

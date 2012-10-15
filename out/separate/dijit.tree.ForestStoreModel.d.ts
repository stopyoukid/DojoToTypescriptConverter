/// <reference path="Object.d.ts" />
/// <reference path="dijit.tree.TreeStoreModel.d.ts" />
module dijit.tree{
export class ForestStoreModel extends dijit.tree.TreeStoreModel {
rootId : String;
rootLabel : String;
onNewRootItem (args:any) : any;
onAddToRoot (item:any) : any;
onLeaveRoot (item:any) : any;
_requeryTop () : any;
}
}

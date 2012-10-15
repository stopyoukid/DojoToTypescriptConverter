module dijit.tree{
export class TreeStoreModel{
store : any;
childrenAttrs : any;
newItemIdAttr : String;
labelAttr : String;
root : any;
query : any;
deferItemLoadingUntilExpand : bool;
connects : Object;
destroy () : any;
getRoot (onItem:any,onError:any) : any;
mayHaveChildren (item:any) : any;
getChildren (parentItem:any,onComplete:any,onError:Function) : any;
isItem (something:any) : bool;
fetchItemByIdentity (keywordArgs:any) : any;
getIdentity (item:any) : Object;
getLabel (item:any) : String;
newItem (args:any,parent:any,insertIndex?:number) : any;
pasteItem (childItem:any,oldParentItem:any,newParentItem:any,bCopy:bool,insertIndex?:number) : any;
onChange (item:any) : any;
onChildrenChange (parent:any,newChildrenList:any) : any;
onDelete (parent:any,newChildrenList:any) : any;
onNewItem (item:any,parentInfo:Object) : any;
onDeleteItem (item:Object) : any;
onSetItem (item:any,attribute:any,oldValue:any,newValue:any) : any;
}
}

module dijit.tree{
export class model{
destroy () : any;
getRoot (onItem:any) : any;
mayHaveChildren (item:any) : any;
getChildren (parentItem:any,onComplete:any) : any;
isItem (something:any) : any;
fetchItemByIdentity (keywordArgs:any) : any;
getIdentity (item:any) : any;
getLabel (item:any) : any;
newItem (args:any,parent:any,insertIndex?:number) : any;
pasteItem (childItem:any,oldParentItem:any,newParentItem:any,bCopy:bool) : any;
onChange (item:any) : any;
onChildrenChange (parent:any,newChildrenList:any) : any;
}
}

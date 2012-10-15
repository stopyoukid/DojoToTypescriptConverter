/// <reference path="Object.d.ts" />
/// <reference path="dojox.atom.io.model.AtomItem.d.ts" />
module dojox.atom.io.model{
export class Feed extends dojox.atom.io.model.AtomItem {
addEntry (entry:any) : any;
getFirstEntry () : any;
getEntry (entryId:String) : any;
removeEntry (entry:any) : any;
setEntries (arrayOfEntry:any[]) : any;
createEntry () : any;
getSelfHref () : String;
}
}

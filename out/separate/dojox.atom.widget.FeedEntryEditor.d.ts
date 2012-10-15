/// <reference path="Object.d.ts" />
/// <reference path="dojox.atom.widget.FeedEntryViewer.d.ts" />
module dojox.atom.widget{
export class FeedEntryEditor extends dojox.atom.widget.FeedEntryViewer {
_contentEditor : Object;
_oldContent : Object;
_setObject : Object;
enableEdit : bool;
_contentEditorCreator : Object;
entryNewButton : Object;
_editable : bool;
_toLoad : Object;
entryContentNode : Object;
_new : Object;
_toggleEdit () : any;
_isEditable (entry:any) : any;
_createEditor (anchorNode:HTMLElement,node:HTMLElement,multiline:bool,rte:any) : any;
_switchEditor (event:any) : any;
_createPeopleEditor (anchorNode:HTMLElement,node:HTMLElement) : any;
saveEdits () : any;
_handleSave (entry:any,location:String) : any;
cancelEdits () : any;
clearEditors () : any;
_enforceXhtml (html:String) : any;
_closeTag (xhtml:String,tag:String) : any;
_toggleNew () : any;
}
}

/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit._editor{
export class RichText extends dijit._Widget {
cssStateNodes : Object;
hovering : bool;
active : bool;
_mouseDown : Object;
_stateClasses : any;
_cssMouseEvent (event:any) : any;
_setStateClass () : any;
_trackMouseState (node:HTMLElement,clazz:String) : any;
inheritWidth : bool;
focusOnLoad : bool;
name : String;
styleSheets : String;
height : String;
minHeight : String;
isClosed : bool;
isLoaded : bool;
_SEPARATOR : String;
_NAME_CONTENT_SEP : String;
onLoadDeferred : any;
isTabIndent : bool;
disableSpellCheck : bool;
contentPreFilters : any;
contentPostFilters : any[];
events : any;
captureEvents : any;
_editorCommandsLocalized : Object;
_oldHeight : any;
_oldWidth : any;
value : any;
header : Object;
editingArea : Object;
footer : Object;
editorObject : Object;
_iframeSrc : Object;
_local2NativeFormatNames : Object;
_native2LocalFormatNames : Object;
_cursorToStart : Object;
editingAreaStyleSheets : any[];
disabled : bool;
_disabledOK : Object;
_iframeRegHandle : Object;
tabStop : Object;
focusNode : any;
_webkitListener : Object;
_onKeyHitch : Object;
updateInterval : number;
_updateTimer : Object;
_updateHandler : Object;
_qcaCache : Object;
__overflow : Object;
contentDomPreFilters : any[];
contentDomPostFilters : any[];
_keyHandlers : Object;
setupDefaultShortcuts () : any;
_localizeEditorCommands () : any;
open (element?:HTMLElement) : any;
reset () : any;
_getIframeDocTxt () : any;
_applyEditingAreaStyleSheets () : any;
addStyleSheet (uri:any) : any;
removeStyleSheet (uri:any) : any;
_setDisabledAttr (value:bool) : any;
onLoad (html:String) : any;
setDisabled (disabled:bool) : any;
_setValueAttr (value:String) : any;
_setDisableSpellCheckAttr (disabled:bool) : any;
addKeyHandler (key:String,ctrl:bool,shift:bool,handler:Function) : any;
onKeyPressed () : any;
_onIEMouseDown (e:any) : any;
blur () : any;
focus () : any;
onDisplayChanged (e:any) : any;
onNormalizedDisplayChanged () : any;
onChange (newContent:any) : any;
_normalizeCommand (cmd:String,argument?:any) : any;
queryCommandAvailable (command:String) : any;
_queryCommandAvailable (command:String) : any;
execCommand (command:String,argument:any) : any;
queryCommandEnabled (command:String) : any;
queryCommandState (command:any) : any;
queryCommandValue (command:any) : any;
_sCall (name:any,args:any) : any;
placeCursorAtStart () : any;
placeCursorAtEnd () : any;
getValue (nonDestructive?:bool) : any;
_getValueAttr () : any;
setValue (html:String) : any;
replaceValue (html:String) : any;
_preFilterContent (html:String) : any;
_preDomFilterContent (dom:HTMLElement) : any;
_postFilterContent (dom?:HTMLElement,nonDestructive?:bool) : any;
_saveContent (e:any) : any;
escapeXml (str:String,noSingleQuotes:bool) : String;
getNodeHtml (node:HTMLElement) : String;
getNodeChildrenHtml (dom:HTMLElement) : any;
close (save?:bool) : any;
_removeMozBogus (html:String) : String;
_removeWebkitBogus (html:String) : String;
_normalizeFontStyle (html:String) : any;
_preFixUrlAttributes (html:String) : any;
_inserthorizontalruleImpl (argument:IArguments) : any;
_unlinkImpl (argument:IArguments) : any;
_hilitecolorImpl (argument:IArguments) : any;
_backcolorImpl (argument:IArguments) : any;
_forecolorImpl (argument:IArguments) : any;
_inserthtmlImpl (argument:any) : any;
_boldImpl (argument:any) : any;
_italicImpl (argument:any) : any;
_underlineImpl (argument:any) : any;
_strikethroughImpl (argument:any) : any;
getHeaderHeight () : number;
getFooterHeight () : number;
_getNodeChildrenHeight (node:any) : number;
_isNodeEmpty (node:any,startOffset:any) : any;
_removeStartingRangeFromRange (node:any,range:any) : any;
_adaptIESelection () : any;
}
}

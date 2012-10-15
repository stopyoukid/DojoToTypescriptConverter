/// <reference path="Object.d.ts" />
/// <reference path="dojox.editor.plugins.Save.d.ts" />
module dojox.editor.plugins{
export class AutoSave extends dojox.editor.plugins.Save {
interval : number;
_iconClassPrefix : String;
_MIN : number;
_strings : Object;
_saveSettingDialog : Object;
_promDialog : Object;
_menuItemAutoSave : Object;
_menuItemAutoSaveClickHandler : Object;
_intervalHandler : Object;
_promDialogTimeout : Object;
_isWorking : bool;
_destroyRecursive : Object;
_setIntervalAttr (val:any) : any;
_getIntervalAttr () : any;
_showAutSaveSettingDialog () : any;
_onDialogOk () : any;
_onStopClick () : any;
_setSaveInterval (interval:number) : any;
_clearSaveInterval () : any;
}
}

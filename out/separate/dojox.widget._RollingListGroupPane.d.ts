/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget._RollingListPane.d.ts" />
module dojox.widget{
export class _RollingListGroupPane extends dojox.widget._RollingListPane {
_menu : any;
_scrollConn : Object;
_pendingFocus : Object;
_visibleLoadPending : Object;
_checkScrollConnection (doLoad:any) : any;
_getMenu () : any;
_onScrollPane () : any;
_loadVisibleItems () : any;
_getSelected (menu?:any) : any;
_setSelected (item?:any,menu?:any) : any;
}
}

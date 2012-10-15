/// <reference path="Object.d.ts" />
/// <reference path="dijit.MenuItem.d.ts" />
module dijit{
export class CheckedMenuItem extends dijit.MenuItem {
checked : bool;
_setCheckedAttr (checked:bool) : any;
onChange (checked:bool) : any;
}
}

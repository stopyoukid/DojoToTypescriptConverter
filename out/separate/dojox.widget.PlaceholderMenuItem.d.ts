/// <reference path="Object.d.ts" />
/// <reference path="dijit.MenuItem.d.ts" />
module dojox.widget{
export class PlaceholderMenuItem extends dijit.MenuItem {
_replaced : bool;
_replacedWith : any[];
_isPlaceholder : Object;
replace (menuItems:any) : any;
unReplace (destroy?:bool) : any;
}
}

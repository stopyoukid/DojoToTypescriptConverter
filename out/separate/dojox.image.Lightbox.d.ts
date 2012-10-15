/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.image{
export class Lightbox extends dijit._Widget {
group : String;
href : String;
duration : number;
modal : bool;
_allowPassthru : bool;
_attachedDialog : Object;
_addSelf () : any;
_handleClick (e:any) : any;
show () : any;
hide () : any;
disable () : any;
enable () : any;
}
}

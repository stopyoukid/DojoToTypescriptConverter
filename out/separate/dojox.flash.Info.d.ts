/// <reference path="Object.d.ts" />
module dojox.flash{
export class Info{
version : String;
versionMajor : number;
versionMinor : number;
versionRevision : number;
capable : bool;
installing : bool;
isVersionOrAbove (reqMajorVer:number,reqMinorVer:number,reqVer:number) : any;
_JSFlashInfo (testVersion:any) : any;
}
}

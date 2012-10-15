/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins._StoreLayer.d.ts" />
module dojox.grid.enhanced.plugins{
export class _ServerSideLayer extends dojox.grid.enhanced.plugins._StoreLayer {
_url : String;
_isStateful : bool;
useCommands (toUse?:bool) : bool;
_fetch (userRequest:any) : any;
command (cmdName:String,cmdContent?:String) : any;
onCommandLoad (response:String,userRequest:any) : any;
onCommandError (error:any) : any;
_onUserCommandLoad () : any;
}
}

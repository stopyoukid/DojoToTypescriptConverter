/// <reference path="Object.d.ts" />
/// <reference path="dojo.dnd.__MoveableArgs.d.ts" />
module dojo.dnd.move{
export class __constrainedMoveableArgs extends dojo.dnd.__MoveableArgs {
within : bool;
constraints () : any;
}
}

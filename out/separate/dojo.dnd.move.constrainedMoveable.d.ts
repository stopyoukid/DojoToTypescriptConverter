/// <reference path="Object.d.ts" />
/// <reference path="dojo.dnd.Moveable.d.ts" />
module dojo.dnd.move{
export class constrainedMoveable extends dojo.dnd.Moveable {
within : bool;
constraintBox : Object;
constraints () : any;
}
}

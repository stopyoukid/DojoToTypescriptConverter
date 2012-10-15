module dojox.dnd{
export class BoundingBoxController{
_startX : Object;
_startY : Object;
_endX : Object;
_endY : Object;
domNode : any;
events : any[];
subscriptions : any[];
destroy () : any;
boundingBoxIsViable () : any;
_onMouseDown (evt:Object) : any;
_onMouseMove (evt:Object) : any;
_onMouseUp (evt:Object) : any;
_finishSelecting () : any;
_drawBoundingBox () : any;
}
}

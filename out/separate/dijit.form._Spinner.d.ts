/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.RangeBoundTextBox.d.ts" />
module dijit.form{
export class _Spinner extends dijit.form.RangeBoundTextBox {
defaultTimeout : number;
minimumTimeout : number;
timeoutChangeRate : number;
smallDelta : number;
largeDelta : number;
_wheelTimer : Object;
adjust (val:Object,delta:number) : any;
_arrowPressed (nodePressed:HTMLElement,direction:number,increment:number) : any;
_arrowReleased (node:HTMLElement) : any;
_typematicCallback (count:number,node:HTMLElement,evt:any) : any;
_mouseWheeled (evt:any) : any;
}
}

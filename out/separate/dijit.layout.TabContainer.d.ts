/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout._TabContainerBase.d.ts" />
module dijit.layout{
export class TabContainer extends dijit.layout._TabContainerBase {
useMenu : bool;
useSlider : bool;
controllerWidget : String;
_makeController (srcNode:HTMLElement) : any;
}
}

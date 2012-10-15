/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.View.d.ts" />
module dojox.mobile.app{
export class SceneController extends dojox.mobile.View {
stageController : Object;
sceneName : any;
_deferredInit : Object;
sceneAssistantName : any;
_widgets : Object;
init (sceneName:any,params:any) : any;
_setContents (templateHtml:any) : any;
_initAssistant () : any;
query (selector:any,node:any) : any;
parse (node:any) : any;
getWindowSize () : any;
showAlertDialog (props:any) : any;
popupSubMenu (info:any) : any;
}
}

module dojox.mobile.app{
export class StageController{
scenes : any[];
effect : String;
_opInProgress : Object;
domNode : any;
getActiveSceneController () : any;
pushScene (sceneName:any,params:any) : any;
setZIndex (controller:any,idx:any) : any;
popScene (data:any) : any;
popScenesTo (sceneName:any,data:any) : any;
_destroyScene (scene:any) : any;
}
}

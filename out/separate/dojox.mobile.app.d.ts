module dojox.mobile.app{
export var _base : Object;
export var isIPhone : any;
export var isWebOS : bool;
export var isAndroid : bool;
export var _event : Object;
export var compat : Object;
export function init (node:any) : any;
export function getActiveSceneController () : any;
export function getStageController () : any;
export function loadResources (resources:any,callback:any) : any;
export function loadResourcesForScene (sceneName:any,callback:any) : any;
export function resolveTemplate (sceneName:any) : any;
export function resolveAssistant (sceneName:any) : any;
export function connectFlick (target:HTMLElement,context:any,method:any) : any;
}

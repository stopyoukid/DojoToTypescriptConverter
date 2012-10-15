module dojox.io.proxy.xip{
export var xipClientUrl : Object;
export var urlLimit : number;
export var _callbackName : String;
export var _state : Object;
export var _stateIdCounter : number;
export var _isWebKit : bool;
export var _xhrObjOld : any;
export function _realSend (facade:any) : Object;
export function receive (stateId:String,urlEncodedData:String) : any;
export function frameLoaded (stateId:String) : any;
export function destroyState (stateId:String) : any;
export function createFacade () : any;
export function sendRequest (stateId:any,encodedData:any) : any;
export function sendRequestStart (stateId:any) : any;
export function sendRequestPart (stateId:any) : any;
export function setServerUrl (stateId:any,cmd:any,message:any) : any;
export function makeServerUrl (stateId:any,cmd:any,message:any) : any;
export function fragmentReceivedEvent (evt:any) : any;
export function fragmentReceived (frag:any) : any;
export function unpackMessage (encodedMessage:any) : any;
}

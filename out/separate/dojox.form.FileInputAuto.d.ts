/// <reference path="Object.d.ts" />
/// <reference path="dojox.form.FileInput.d.ts" />
module dojox.form{
export class FileInputAuto extends dojox.form.FileInput {
url : String;
blurDelay : number;
duration : number;
uploadMessage : String;
triggerEvent : String;
_sent : bool;
_blurListener : Object;
_focusListener : Object;
_blurTimer : Object;
_sending : bool;
onBeforeSend () : any;
setMessage (title:String) : any;
_sendFile (e:any) : any;
_handleSend (data:any,ioArgs:any) : any;
onComplete (data:any,ioArgs:any,widgetRef:any) : any;
}
}

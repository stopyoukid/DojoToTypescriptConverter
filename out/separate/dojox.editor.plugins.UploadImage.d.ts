/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class UploadImage extends dijit._editor._Plugin {
tempImageUrl : String;
uploadUrl : String;
label : String;
currentImageId : String;
createFileInput () : any;
onComplete (data:any,ioArgs:any,widgetRef:any) : any;
insertTempImage () : any;
}
}

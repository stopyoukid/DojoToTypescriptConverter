module dojox.form.uploader.plugins{
export class Flash{
swfPath : String;
skipServerCheck : bool;
serverTimeout : number;
isDebug : bool;
devMode : bool;
deferredUploading : number;
force : String;
uploadType : String;
_files : Object;
_fileMap : Object;
_createInput : any;
getFileList : any;
reset : any;
upload : any;
submit : any;
fieldname : String;
_subs : any[];
_cons : any[];
inputNode : Object;
postMixInProperties () : any;
onReady (uploader:any) : any;
onLoad (uploader:any) : any;
onFileChange (fileArray:any) : any;
onFileProgress (fileArray:any) : any;
getFlashFileList () : any[];
flashReset () : any;
uploadFlash () : any;
submitFlash (formParams:Object) : any;
_change (fileArray:any) : any;
_complete (fileArray:any) : any;
_progress (f:any) : any;
_error (err:any) : any;
_onFlashBlur (fileArray:any) : any;
_getCustomEvent () : Object;
_connectFlash () : any;
_createFlashUploader () : any;
}
}

/// <reference path="Object.d.ts" />
/// <reference path="dojox.form.uploader.Base.d.ts" />
module dojox.form.uploader{
export class FileList extends dojox.form.uploader.Base {
uploaderId : String;
uploader : any;
headerIndex : String;
headerType : String;
headerFilename : String;
headerFilesize : String;
_upCheckCnt : number;
rowAmt : number;
progressNode : any;
reset () : any;
setUploader () : any;
hideProgress (animate:bool) : any;
showProgress (animate:bool) : any;
_progress (customEvent:Object) : any;
_hideShowProgress (o:any) : any;
_onUploaderChange (fileArray:any) : any;
_addRow (index:any,type:any,name:any,size:any) : any;
}
}

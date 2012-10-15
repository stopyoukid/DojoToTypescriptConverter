/// <reference path="Object.d.ts" />
module dojox.form.uploader.plugins{
export class HTML5{
errMsg : String;
uploadType : String;
postCreate () : any;
upload (formData:Object) : any;
submit (form:any) : any;
sendAsBinary (data:Object) : any;
uploadWithFormData (data:Object) : any;
_xhrProgress (evt:any) : any;
createXhr () : any;
_buildRequestBody (data:any,boundary:any) : any;
}
}

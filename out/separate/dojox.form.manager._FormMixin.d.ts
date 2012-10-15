/// <reference path="Object.d.ts" />
module dojox.form.manager{
export class _FormMixin{
name : String;
action : String;
method : String;
encType : String;
accept : String;
target : String;
isForm : bool;
formWidgets : any;
startup () : any;
_onReset (evt:any) : any;
onReset () : bool;
reset () : any;
_onSubmit (evt:any) : any;
onSubmit () : bool;
submit () : any;
isValid () : any;
validate () : any;
}
}

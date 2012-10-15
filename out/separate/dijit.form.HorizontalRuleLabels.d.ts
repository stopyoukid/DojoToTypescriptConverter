/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.HorizontalRule.d.ts" />
module dijit.form{
export class HorizontalRuleLabels extends dijit.form.HorizontalRule {
labelStyle : String;
labels : any;
numericMargin : number;
minimum : number;
maximum : number;
_labelPrefix : String;
_calcPosition (pos:any) : any;
getLabels () : any;
}
}

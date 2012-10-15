/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormWidget.d.ts" />
module dojox.form{
export class Rating extends dijit.form._FormWidget {
numStars : number;
_onMouse (evt:any) : any;
_renderStars (value:any,hover:any) : any;
onStarClick (evt:any) : any;
}
}

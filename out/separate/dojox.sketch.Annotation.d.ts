module dojox.sketch{
export class Annotation{
id : any;
_key : any;
figure : any;
mode : any;
shape : Object;
boundingBox : Object;
hasAnchors : Object;
anchors : Object;
_properties : Object;
type () : any;
getType () : any;
onRemove (noundo:any) : any;
property (name:any,value:any) : any;
onPropertyChange (name:any,oldvalue:any) : any;
onCreate () : any;
onDblClick (e:any) : any;
initialize () : any;
destroy () : any;
draw () : any;
apply (obj:any) : any;
serialize () : any;
getBBox () : any;
setBinding (pt:any) : any;
getTextBox (zoomfactor:any) : any;
zoom (pct:any) : any;
writeCommonAttrs () : any;
register (name:any,toolclass:any) : any;
}
}

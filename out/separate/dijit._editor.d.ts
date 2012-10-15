module dijit._editor{
export var html : Object;
export var range : Object;
export function escapeXml (str:String,noSingleQuotes?:bool) : String;
export function getNodeHtml (node:HTMLElement) : any;
export function getChildrenHtml (dom:HTMLElement) : String;
}

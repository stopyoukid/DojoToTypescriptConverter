module dijit._editor.selection{
export function getType () : String;
export function getSelectedText () : String;
export function getSelectedHtml () : String;
export function getSelectedElement () : any;
export function getParentElement () : any;
export function hasAncestorElement (tagName:String) : bool;
export function getAncestorElement (tagName:String) : HTMLElement;
export function isTag (node:HTMLElement,tags:any) : String;
export function getParentOfType (node:HTMLElement,tags:any) : HTMLElement;
export function collapse (beginning:bool) : any;
export function remove () : any;
export function selectElementChildren (element:HTMLElement,nochangefocus?:bool) : any;
export function selectElement (element:HTMLElement,nochangefocus?:bool) : any;
export function inSelection (node:any) : bool;
}

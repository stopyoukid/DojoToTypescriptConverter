/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.ContentPane.d.ts" />
module dojox.widget{
export class WizardPane extends dijit.layout.ContentPane {
canGoBack : bool;
passFunction : String;
doneFunction : String;
_checkPass () : bool;
done () : any;
}
}

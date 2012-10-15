/// <reference path="Object.d.ts" />
/// <reference path="dojo.number.__ParseOptions.d.ts" />
module dojo.currency{
export class __ParseOptions extends dojo.number.__ParseOptions {
currency : String;
symbol : String;
places : number;
}
}

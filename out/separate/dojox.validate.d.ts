module dojox.validate{
export var creditCard : Object;
export var _isInRangeCache : Object;
export var _base : Object;
export var isbn : Object;
export var isEmailAddressList : any;
export var web : Object;
export function isText (value:String,flags?:Object) : bool;
export function isInRange (value:String,flags?:Object) : bool;
export function isNumberFormat (value:String,flags?:Object) : bool;
export function isValidLuhn (value:String) : bool;
export function check (form:any,profile:Object) : Object;
export function evaluateConstraint (profile:any,constraint:any[],fieldName:any,elem:any) : bool;
export function isValidCreditCard (value:String,ccType:String) : any;
export function isValidCreditCard (value:number,ccType:String) : any;
export function isValidCreditCardNumber (value:String,ccType?:String) : any;
export function isValidCreditCardNumber (value:number,ccType?:String) : any;
export function isValidCvv (value:String,ccType:String) : bool;
export function isValidCvv (value:number,ccType:String) : bool;
export function isValidIsbn (value:String) : bool;
export function isIpAddress (value:String,flags?:Object) : bool;
export function isUrl (value:String,flags?:Object) : bool;
export function isEmailAddress (value:String,flags?:Object) : bool;
export function getEmailAddressList (value:String,flags?:Object) : any[];
}

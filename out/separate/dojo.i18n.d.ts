module dojo.i18n{
export function getLocalization () : any;
export function normalizeLocale (locale?:String) : String;
export function _requireLocalization (moduleName:String,bundleName:String,locale?:String,availableFlatLocales?:String,m?:any,b?:any) : any;
export function _searchLocalePath (locale:String,down:bool,searchFunc:Function) : any;
export function _preloadLocalizations (bundlePrefix:String,localesGenerated:any[]) : any;
}

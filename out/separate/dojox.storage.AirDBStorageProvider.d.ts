/// <reference path="Object.d.ts" />
/// <reference path="dojox.storage.Provider.d.ts" />
module dojox.storage{
export class AirDBStorageProvider extends dojox.storage.Provider {
DATABASE_FILE : String;
TABLE_NAME : String;
initialized : Object;
_db : Object;
_statusHandler : any;
_sql (query:any,params:any) : any;
_beginTransaction () : any;
_commitTransaction () : any;
}
}

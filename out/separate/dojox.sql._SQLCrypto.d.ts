/// <reference path="Object.d.ts" />
module dojox.sql{
export class _SQLCrypto{
_totalCrypto : number;
_finishedCrypto : number;
_finishedSpawningCrypto : Object;
_finalArgs : any;
_finalResultSet : any;
_execEncryptSQL (sql:any,password:any,args:any,callback:any) : any;
_execDecryptSQL (sql:any,password:any,args:any,callback:any) : any;
_encrypt (sql:any,password:any,args:any,encryptColumns:any,callback:any) : any;
_decrypt (resultSet:any,needsDecrypt:any,password:any,callback:any) : any;
_stripCryptoSQL (sql:any) : any;
_flagEncryptedArgs (sql:any,args:any) : any;
_determineDecryptedColumns (sql:any) : any;
_decryptSingleColumn (columnName:any,columnValue:any,password:any,currentRowIndex:any,callback:any) : any;
}
}

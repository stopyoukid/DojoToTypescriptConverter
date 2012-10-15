/// <reference path="Object.d.ts" />
module dojox.testing{
export class DocTest{
errors : any[];
tests : any;
getTests (moduleName:String) : any;
getTestsFromString (data:String) : any;
_getTestsFromString (data:String,insideComments:bool) : any;
run (moduleName:any) : any;
_run (tests:any[]) : any;
runTest (commands:any,expected:any) : any;
}
}

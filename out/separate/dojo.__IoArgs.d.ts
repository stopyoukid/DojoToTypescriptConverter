module dojo{
export class __IoArgs{
url : String;
content : Object;
timeout : number;
form : HTMLElement;
preventCache : bool;
handleAs : String;
ioPublish : bool;
load (response:Object,ioArgs:any) : any;
error (response:Object,ioArgs:any) : any;
handle (loadOrError:String,response:Object,ioArgs:any) : any;
}
}

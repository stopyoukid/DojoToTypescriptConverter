module dojox.encoding.crypto{
export class RSAKey{
n : Object;
e : number;
rngf : Object;
d : Object;
p : Object;
q : Object;
dmp1 : Object;
dmq1 : Object;
coeff : Object;
decrypt (ctext:String) : any;
setPublic (N:any,E:any) : any;
encrypt (text:any) : any;
}
}

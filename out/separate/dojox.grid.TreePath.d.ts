module dojox.grid{
export class TreePath{
level : number;
_str : Object;
_arr : Object;
store : Object;
cell : Object;
_item : Object;
item () : any;
compare (path:any) : any;
isOpen () : any;
previous () : any;
next () : any;
children (alwaysReturn:any) : any;
childPaths () : any;
parent () : any;
lastChild (traverse?:bool) : any;
}
}

module dojox.mdnd{
export class LazyManager{
_registry : Object;
_fakeSource : Object;
getItem (draggedNode:HTMLElement) : any;
startDrag (e:any,draggedNode?:HTMLElement) : any;
cancelDrag () : any;
destroy () : any;
}
}

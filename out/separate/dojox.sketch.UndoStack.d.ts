module dojox.sketch{
export class UndoStack{
_undoedSteps : any[];
figure : any;
_steps : any[];
apply (state:any,from:any,to:any) : any;
add (cmd:String,ann?:any,before?:String) : any;
destroy () : any;
undo () : any;
redo () : any;
}
}

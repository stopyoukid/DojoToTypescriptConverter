/// <reference path="Object.d.ts" />
module dojox.grid{
export class _ViewManager{
defaultWidth : number;
grid : any;
resize () : any;
render () : any;
addView (inView:any) : any;
destroyViews () : any;
getContentNodes () : any;
forEach (inCallback:any) : any;
onEach (inMethod:any,inArgs:any) : any;
normalizeHeaderNodeHeight () : any;
normalizeRowNodeHeights (inRowNodes:any) : any;
resetHeaderNodeHeight () : any;
renormalizeRow (inRowIndex:any) : any;
getViewWidth (inIndex:any) : any;
measureHeader () : any;
measureContent () : any;
findClient (inAutoWidth:any) : any;
arrange (l:any,w:any) : any;
renderRow (inRowIndex:any,inNodes:any,skipRenorm:any) : any;
rowRemoved (inRowIndex:any) : any;
updateRow (inRowIndex:any,skipRenorm:any) : any;
updateRowStyles (inRowIndex:any) : any;
setScrollTop (inTop:any) : any;
getFirstScrollingView () : any;
}
}

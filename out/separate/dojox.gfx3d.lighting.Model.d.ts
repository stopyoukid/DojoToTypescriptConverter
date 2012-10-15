module dojox.gfx3d.lighting{
export class Model{
incident : Object;
lights : any[];
npr_cool : Object;
npr_warm : Object;
npr_alpha : number;
npr_beta : number;
npr_scale : number;
constant (normal:any,finish:any,pigment:any) : any;
matte (normal:any,finish:any,pigment:any) : any;
metal (normal:any,finish:any,pigment:any) : any;
plastic (normal:any,finish:any,pigment:any) : any;
npr (normal:any,finish:any,pigment:any) : any;
}
}

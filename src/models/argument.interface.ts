
export type ArgumentDirective = "next"|"last";
export interface StaticArgument {
    directive?:ArgumentDirective;
    name:string;
}
export interface Argument extends StaticArgument {
    index:number;
    value?:string;
}
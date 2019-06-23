import { Argument, StaticArgument } from "./argument.interface";
export interface StaticOption extends StaticArgument {
    spinalCaseName:string;
    flag?:string;
}
export interface Option extends Argument, StaticOption {
    camelCaseName:string;
}
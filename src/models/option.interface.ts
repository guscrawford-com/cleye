import { Argument } from "./argument.interface";

export interface Option extends Argument {
    flag?:string;
    camelCaseName:string;
    value:string;
}
import { Argument } from "./argument.interface";
import { Option } from "./option.interface";

export interface Command extends Argument {
    name:string;
    options: Option[];
    args:Argument[];
}
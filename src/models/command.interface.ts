import { Argument, StaticArgument } from "./argument.interface";
import { StaticOption } from "./option.interface";
export interface StaticCommand extends StaticArgument {
    name:string;
    options?:{[key:string]:StaticOption};
    args?:{[key:string]:StaticArgument};
}
export interface Command extends Argument, StaticArgument {
    options:{[key:string]:StaticOption};
    args:{[key:string]:StaticArgument};
}
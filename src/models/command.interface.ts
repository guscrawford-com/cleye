import { Argument, StaticArgument } from "./argument.interface";
import { StaticOption } from "./option.interface";

/** The fundamental programmer-provided definition of a `Command` and it's plausible set of `StaticArgument`s and `StaticOption`s it can receive on the command-line */
export interface StaticCommand extends StaticArgument {
    name:string;
    options?:{[key:string]:StaticOption};
    args?:{[key:string]:StaticArgument};
}

/** A further processed extension of a programmer-defined command with an assured set of `StaticArgument`s and `StaticOption`s realized */
export interface Command extends Argument, StaticArgument {
    options:{[key:string]:StaticOption};
    args:{[key:string]:StaticArgument};
}
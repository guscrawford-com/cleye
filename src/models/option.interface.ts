import { Argument, StaticArgument } from "./argument.interface";
/** The fundamental programmer-provided definition of an option a `Command` can receive on the command-line */
export interface StaticOption extends StaticArgument {
    /** The *spinal-case* form of the option name to appear in *camelCase* on the `<command>.options` table; both of which are matched on the command-line following the `--` prefix */
    spinalCaseName:string;
    /** An optional alias (intended to be a short-hand or single character) matched with a `-` prefix */
    flag?:string;
}
/** A further processed extension of a programmer-defined option with an assured *camelCaseName* realized */
export interface Option extends Argument, StaticOption {
    /** The *camelCase* form of the option name to appear on the `<command>.options` table; matched on the command-line following the `--` prefix (in addition to it's *spinal-case* form) */
    camelCaseName:string;
}
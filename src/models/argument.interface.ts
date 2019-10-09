

/** @deprecated in which order to process this argument */
export type ArgumentDirective = "next"|"last";
/** The fundamental programmer-provided definition of an argument a `Command` can receive on the command-line */
export interface StaticArgument {
    /** @deprecated in which order to process this argument */
    directive?:ArgumentDirective;
    /** A name (in any form) with which to assign and reference this argument on the `<command>.args` table */
    name:string;
    /** The possible value of the argument if provided */
    value?:string;
}


/** A further processed extension of a programmer-defined argument with an assured *index* (possibly -1 or 'not there') and possible `value` (if provided in command-line input) realized */
export interface Argument extends StaticArgument {
    /** The index of the argument in the command-input relative to the index of the command */
    index:number;
}
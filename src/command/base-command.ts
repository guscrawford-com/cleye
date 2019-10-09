import { StaticArgument, Argument } from "../models/argument.interface";
import { StaticOption, Option } from "../models/option.interface";
import { Command } from "../models/command.interface";


export const OPTN_PRFX = "--", FLG_PRFX = "-";

/** Enumeration of stages a `Command` is in */
export enum ParseStage {
    Constructing,
    Options,
    Arguments
}

/** Thrown when a command is manually instantiated out-of-order */
class CommandDefinitionOrderError extends Error {
    constructor (parseStage:ParseStage) {
        super(`CommandDefinitionOrderError: command is not in "${ParseStage[parseStage]}" stage`);
    }
    internalStack:string[] = [];
}

export class BaseCommand implements Command {
    
    protected parseStage:ParseStage = ParseStage.Constructing;
    
    /** A table of *at least* `StaticArgument`s modeling arguments `this` command *could* be given; will be an instance of `Argument` with a non-negative index and a value if provided as input */
    args:{[key:string]:StaticArgument|Argument} = {};
    
    /** A table of *at least* `StaticOption`s modeling options `this` command *could* be given; will be an instance of `Option` with a non-negative index and a value if provided as input */
    options:{[key:string]:StaticOption|Option} = {};

    constructor (
        public name:string,
        public index:number,
        protected input:string[],
        public run?:(args:any)=>any
    ) {
        this.parseStage = ParseStage.Options;
    }

    protected protectCommandDefinitionOrder(desiredStage:ParseStage) {
        let commandDefinitionOrderError = new CommandDefinitionOrderError(desiredStage);
        commandDefinitionOrderError.internalStack = (commandDefinitionOrderError.stack||'').split('\n');
        commandDefinitionOrderError.stack = commandDefinitionOrderError.internalStack.slice(2).join('\n');
        if (this.parseStage > desiredStage || this.parseStage <  desiredStage) return commandDefinitionOrderError;
    }
    protected getAbsoluteIndex(index:number) {
        return this.index>0?this.index:0 + index;
    }
    protected getCamelCase(spinalCaseName:string):string {
        return spinalCaseName.split('-').map(
            (w,i)=>
            i
                ? w[0].toLocaleUpperCase()
                    + w.substring(1).toLocaleLowerCase()
                : w.toLocaleLowerCase()
        ).join('');
    }
    
    protected getSpinalCase(camelCaseName:string) {
        camelCaseName.split('').map((char,i)=>{
            let lowerCaseChar = char.toLocaleLowerCase();
            return lowerCaseChar === char? char : `${i?'-':''}${lowerCaseChar}`;
        }).join('');
    }
    
    protected validSpinalCase(name:string) {
        // Check for *uppercase* and *titlecase* across cultures...
        // https://stackoverflow.com/questions/4050381/regular-expression-for-checking-if-capital-letters-are-found-consecutively-in-a
        // return /(?![\p{Lu}\p{Lt}])/.test(name); ... not working
        return !/[A-Z]/.test(name);
    }
    protected validFlagOrOptionPrefix(inputIndex:number) {
        if (this.input[inputIndex])
            return this.input[inputIndex].startsWith(FLG_PRFX);
        return false;
    }
}
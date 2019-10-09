import { BaseCommand, ParseStage } from "./base-command";
import { StaticArgument, Argument } from "../models/argument.interface";

export class RegistersArguments extends BaseCommand {
    constructor (
        public name:string,
        public index:number,
        protected input:string[],
        public run?:(args:any)=>any
    ) {
        super(name, index, input, run);
    }
    
    /**
     * Register an argument on `this` command
     * @param info A `StaticArgument` command argument defintion
     */
    argument(info:StaticArgument) {
        this.parseStage = ParseStage.Arguments;
        let argInst =  this.getArgument(info)
        this.args[argInst.name] = (argInst);
        return this;
    }

    protected getArgument(info:StaticArgument) : Argument {
        let argInst: Argument = {
            ... info,
            index:0
        };
        if (this.input[argInst.index])
        switch (info.directive) {
            case 'last':
                argInst.index = this.input.length - 1;
                if (!this.validFlagOrOptionPrefix(argInst.index))
                    argInst.value = this.input.pop();
                break;
            default:
                if (!this.validFlagOrOptionPrefix(argInst.index))
                    argInst.value = this.input.shift();
                break;
        }
        argInst.index = this.getAbsoluteIndex(argInst.index)
        return argInst;
    }

}
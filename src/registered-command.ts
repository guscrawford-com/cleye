import { Command } from './models/command.interface';
import { Argument, ArgumentDirective, StaticArgument } from './models/argument.interface';
import { Option, StaticOption } from './models/option.interface';
const OPTN_PRFX = "--", FLG_PRFX = "-";
interface OptionIndex {delimeter?:string,index:number,usesCamelCase?:boolean,usesFlag?:boolean,key?:string, value?:string}
export class RegisteredCommand implements Command {
    
    args:{[key:string]:StaticArgument} = {};
    options:{[key:string]:StaticOption} = {};
    constructor (
        public name:string,
        public index:number,
        protected input:string[]
    ) {

    }

    /**
     * Register an option on `this` command
     * @param info A `StaticOption` command option defintion
     */
    option(
        info:StaticOption
    ):RegisteredCommand {
        this.options[info.spinalCaseName] = info;
        let camelCaseName = this.getCamelCase(info.spinalCaseName);
        let optionIndex = this.getOptionIndex(info.spinalCaseName, info.flag);
        if (!optionIndex)
            optionIndex = this.getOptionIndex(camelCaseName, info.flag, true);
        
        if (!optionIndex) return this;
        let optionInst : Option = {
            ... info,
            camelCaseName,
            index : optionIndex.index
        }
        this.getOptionValue(optionIndex);
        optionInst.value = optionIndex.value;
        this.options[optionInst.spinalCaseName] = optionInst;
        return this;
    }
    /**
     * Register an argument on `this` command
     * @param info A `StaticArgument` command argument defintion
     */
    argument(info:StaticArgument) {
        let argInst =  this.getArgument(info)
        this.args[argInst.name] = (argInst);
        return this;
    }

    protected getArgument(info:StaticArgument) : Argument {
        let argInst: Argument = {
            ... info,
            index : this.index + Object.keys(this.args).length
        };
        if (this.input[argInst.index])
        switch (info.directive) {
            case 'last':
                argInst.index = this.index + this.input.length;
                if (!this.validFlagOrOptionPrefix(argInst.index))
                    argInst.value = this.input.pop();
                break;
            default:
                if (!this.validFlagOrOptionPrefix(argInst.index))
                    argInst.value = this.input.shift();
                break;
        }
        return argInst;
    }

    protected getOptionIndex(name:string, flag?:string, usesCamelCase:boolean=false):OptionIndex|null {
        let valueDelimiter = '//s';
        let optionIndex = this.input.findIndex(o=>o===`${FLG_PRFX}${flag}`);
        if (optionIndex !== -1) return {
            delimeter : valueDelimiter,
            index : this.index + optionIndex,
            usesFlag : true
        };
        optionIndex = this.input.findIndex(o=>o===`${OPTN_PRFX}${name}`);
        if (optionIndex !== -1) return {
            delimeter:valueDelimiter,
            index:this.index + optionIndex,
            usesCamelCase
        };
        valueDelimiter = '=';
        optionIndex = this.input.findIndex(o=>o.startsWith(`${FLG_PRFX}${flag}${valueDelimiter}`));
        if (optionIndex !== -1) return {
            delimeter : valueDelimiter,
            index : this.index + optionIndex,
            usesFlag : true
        };
        optionIndex = this.input.findIndex(o=>o.startsWith(`${OPTN_PRFX}${name}${valueDelimiter}`));
        if (optionIndex !== -1) return {
            delimeter : valueDelimiter,
            index : this.index + optionIndex,
            usesCamelCase
        };
        return null;
    }

    protected getOptionValue(optionIndex:OptionIndex):OptionIndex {
        let key=0, value=1;
        let keyValuePair:string[];
        if (optionIndex.delimeter==='=') {
            keyValuePair = this.input[optionIndex.index].split(optionIndex.delimeter);
        }
        else {
            keyValuePair = [
                this.input[optionIndex.index],
                !this.validFlagOrOptionPrefix(optionIndex.index + 1)
                    ? this.input.splice(optionIndex.index + 1,1).pop() as any
                    : undefined
            ];
        }
        optionIndex.key = keyValuePair[key];
        optionIndex.value = keyValuePair[value];
        return optionIndex;
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
    
    protected validFlagOrOptionPrefix(inputIndex:number) {
        return this.input[inputIndex].startsWith(FLG_PRFX)
    }
}
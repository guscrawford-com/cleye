import { Command } from './models/command.interface';
import { Argument, ArgumentDirective, StaticArgument } from './models/argument.interface';
import { Option, StaticOption } from './models/option.interface';
const OPTN_PRFX = "--", FLG_PRFX = "-";
interface OptionIndex {delimeter?:string,index:number,usesCamelCase?:boolean,usesFlag?:boolean,key?:string, value?:string}
enum ParseStage {
    Constructing,
    Options,
    Arguments
}
class CommandDefinitionOrderError extends Error {
    constructor (parseStage:ParseStage) {
        super(`CommandDefinitionOrderError: command is not in "${ParseStage[parseStage]}" stage`);
    }
    internalStack:string[] = [];
}
export class RegisteredCommand implements Command {
    
    args:{[key:string]:StaticArgument} = {};
    options:{[key:string]:StaticOption} = {};
    constructor (
        public name:string,
        public index:number,
        protected input:string[]
    ) {
        this.parseStage = ParseStage.Options;
    }
    protected parseStage:ParseStage = ParseStage.Constructing;
    /**
     * Register an option on `this` command
     * @param info A `StaticOption` command option defintion
     */
    option(
        info:StaticOption
    ):RegisteredCommand {
        this.protectCommandDefinitionOrder(ParseStage.Options);
        this.options[info.spinalCaseName] = info;
        let camelCaseName = this.getCamelCase(info.spinalCaseName);
        let optionIndex = this.getOptionIndex(info.spinalCaseName, info.flag);
        if (!optionIndex)
            optionIndex = this.getOptionIndex(camelCaseName, info.flag, true);
        
        if (!optionIndex) return this;
        let optionInst : Option = {
            ... info,
            camelCaseName,
            index : this.index + optionIndex.index
        }
        this.getOptionValue(optionIndex);
        optionInst.value = optionIndex.value;
        if (this.options[optionInst.spinalCaseName]) delete this.options[optionInst.spinalCaseName];
        this.options[optionInst.camelCaseName] = optionInst;
        this.input.splice(optionIndex.index,1);
        let remainingOptions = this.input.find((x,i)=>this.validFlagOrOptionPrefix(i));
        if (!remainingOptions)
            this.parseStage = ParseStage.Arguments;
        return this;
    }
    /**
     * Register an argument on `this` command
     * @param info A `StaticArgument` command argument defintion
     */
    argument(info:StaticArgument) {
        this.protectCommandDefinitionOrder(ParseStage.Arguments);
        let argInst =  this.getArgument(info)
        this.args[argInst.name] = (argInst);
        return this;
    }

    protected protectCommandDefinitionOrder(desiredStage:ParseStage) {
        let commandDefinitionOrderError = new CommandDefinitionOrderError(desiredStage);
        commandDefinitionOrderError.internalStack = (commandDefinitionOrderError.stack||'').split('\n');
        commandDefinitionOrderError.stack = commandDefinitionOrderError.internalStack.slice(2).join('\n');
        if (this.parseStage > desiredStage || this.parseStage <  desiredStage) throw commandDefinitionOrderError;
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

    protected getOptionIndex(name:string, flag?:string, usesCamelCase:boolean=false):OptionIndex|null {
        let valueDelimiter = '//s';
        let optionIndex = this.input.findIndex(o=>o===`${FLG_PRFX}${flag}`);
        if (optionIndex !== -1) return {
            delimeter : valueDelimiter,
            index : this.getAbsoluteIndex(optionIndex),
            usesFlag : true
        };
        optionIndex = this.input.findIndex(o=>o===`${OPTN_PRFX}${name}`);
        if (optionIndex !== -1) return {
            delimeter:valueDelimiter,
            index: this.getAbsoluteIndex(optionIndex),
            usesCamelCase
        };
        valueDelimiter = '=';
        optionIndex = this.input.findIndex(o=>o.startsWith(`${FLG_PRFX}${flag}${valueDelimiter}`));
        if (optionIndex !== -1) return {
            delimeter : valueDelimiter,
            index : this.getAbsoluteIndex(optionIndex),
            usesFlag : true
        };
        optionIndex = this.input.findIndex(o=>o.startsWith(`${OPTN_PRFX}${name}${valueDelimiter}`));
        if (optionIndex !== -1) return {
            delimeter : valueDelimiter,
            index : this.getAbsoluteIndex(optionIndex),
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

    protected getAbsoluteIndex(index:number) {
        return this.index>-0?this.index:0 + index;
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
        return this.input[inputIndex].startsWith(FLG_PRFX)
    }
}
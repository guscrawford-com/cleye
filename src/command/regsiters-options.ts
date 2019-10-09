import { StaticOption, Option } from "../models/option.interface";
import { RegisteredCommand } from "./registered-command";
import { RegistersArguments } from "./regsiters-arguments";
import { ParseStage, FLG_PRFX, OPTN_PRFX } from "./base-command";
interface OptionIndex {delimeter?:string,index:number,usesCamelCase?:boolean,usesFlag?:boolean,key?:string, value?:string}
export class RegistersOptions extends RegistersArguments {
    constructor (
        public name:string,
        public index:number,
        protected input:string[],
        public run?:(args:any)=>any
    ) {
        super(name, index, input, run);
    }
    /**
     * Register an option on `this` command
     * @param info A `StaticOption` command option defintion
     */
    option(
        info:StaticOption
    ):RegisteredCommand {
        let parseError = this.protectCommandDefinitionOrder(ParseStage.Options);
        this.options[info.spinalCaseName] = info;
        let camelCaseName = this.getCamelCase(info.spinalCaseName);
        let optionIndex = this.getOptionIndex(info.spinalCaseName, info.flag);
        if (!optionIndex)
            optionIndex = this.getOptionIndex(camelCaseName, info.flag, true);
        
        if (!optionIndex) return this as any as RegisteredCommand;

        if (parseError && optionIndex) throw parseError;

        let optionInst : Option = {
            ... info,
            camelCaseName,
            index : (this.index >= 0?this.index:0) + optionIndex.index
        }
        this.getOptionValue(optionIndex);
        optionInst.value = optionIndex.value;
        if (this.options[optionInst.spinalCaseName]) delete this.options[optionInst.spinalCaseName];
        this.options[optionInst.camelCaseName] = optionInst;
        this.input.splice(optionIndex.index,1);
        let remainingOptions = this.input.find((x,i)=>this.validFlagOrOptionPrefix(i));
        if (!remainingOptions)
            this.parseStage = ParseStage.Arguments;
        return this as any as RegisteredCommand;
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
        const key=0, value=1;
        let keyValuePair:string[];
        if (optionIndex.delimeter==='=') {
            keyValuePair = this.input[optionIndex.index].split(optionIndex.delimeter);
        }
        else {
            keyValuePair = [
                this.input[optionIndex.index],
                !this.validFlagOrOptionPrefix(optionIndex.index + 1)
                    ? this.input.splice(optionIndex.index + 1,1).pop() as any || null
                    : null
            ];
        }
        optionIndex.key = keyValuePair[key];
        optionIndex.value = keyValuePair[value];
        return optionIndex;
    }
}
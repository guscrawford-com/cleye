import { Command as CommandInterface } from './models/command.interface';
import { Argument } from './models/argument.interface';
import { Option } from './models/option.interface';
const OPTN_PRFX = "--", FLG_PRFX = "-";
export class Command implements CommandInterface {
    args:Argument[] = [];
    options:Option[] = [];
    constructor (
        public name:string,
        public index:number,
        protected input:string[]
    ) {

    }

    option(
        spinalCaseName:string
    ) {
        let camelCase = this.getCamelCase(spinalCaseName);
        let optionIndex = this.getOptionIndex(spinalCaseName);
        if (optionIndex.index === -1) optionIndex = this.getOptionIndex(camelCase);
    }
    protected getCamelCase(spinalCaseName:string):string {
        return spinalCaseName.split('-').map((w,i)=>i?w[0].toLocaleUpperCase()+w.substring(1).toLocaleLowerCase():w.toLocaleLowerCase()).join('');
    }
    protected getOptionIndex(name:string):{delimeter:string,index:number} {
        let optionIndex = this.input.findIndex(o=>o===name);
        let valueDelimiter = '//s';
        if (optionIndex !== -1) return {
            delimeter:valueDelimiter,
            index:optionIndex
        };
        valueDelimiter = '=';
        optionIndex = this.input.findIndex(o=>o.startsWith(name+valueDelimiter));
        if (optionIndex !== -1) return {
            delimeter:valueDelimiter,
            index:optionIndex
        };
        return {
            index:-1
        };
    }
}
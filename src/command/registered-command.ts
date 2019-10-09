import { Command } from '../models/command.interface';
import { Argument, StaticArgument } from '../models/argument.interface';
import { Option, StaticOption } from '../models/option.interface';
import { BaseCommand } from './base-command';
import { RegistersOptions } from './regsiters-options';



/** A command that was picked up in input and parsed for it's *args* and *options* if any */
export class RegisteredCommand
extends RegistersOptions
implements Command  {
    constructor (
        public name:string,
        public index:number,
        protected input:string[],
        public run?:(args:any)=>any
    ) {
        super(name, index, input, run);
    }
}
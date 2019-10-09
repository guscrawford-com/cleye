import { RegisteredCommand } from "../command/registered-command";
import { StaticCommand } from "../models/command.interface";
export const DefaultDefaultCommandName = "default";
export interface CliAppConfig {
    defaultCommandName?:string;
    commands:{
        [key:string]:StaticCommand
    };
    runAsSatisfied?:boolean;
}
export class CliApp {

    defaultCommand = false;

    /**
     * The path to the node.exe runtime executing with these arguments
     */
    nodeRuntime:string ="";

    /**
     * The path to the JavaScript entry being run by the node runtime
     */
    binRuntime:string = "";

    public commands:{[key:string]:StaticCommand} = {};

    constructor (
        protected options?:CliAppConfig,
        protected args?:string[]
    ) {
        if (!args) this.args = args = process.argv.slice(0);
        this.nodeRuntime = args.shift() || this.nodeRuntime;
        this.binRuntime = args.shift() || this.binRuntime;
        if (!options) options = this.options = {commands:{},runAsSatisfied:false};
        if (!options.defaultCommandName) options.defaultCommandName = DefaultDefaultCommandName;
        if (typeof options.runAsSatisfied === 'undefined') options.runAsSatisfied = true;
        Object.keys(options.commands || {}).forEach(commandDef=>{
            let registerdCommand = this.command((this.options as any).commands[commandDef]);
            if (
                (registerdCommand.index !== -1 || registerdCommand.name === (options as CliAppConfig).defaultCommandName)
                && (options as CliAppConfig).runAsSatisfied
                && typeof registerdCommand.run === 'function'
            ) registerdCommand.run(this);
        });
    }

    /**
     * Register a command on `this` cli
     * @param info A `StaticCommand` command defintion
     */
    command (info:StaticCommand):RegisteredCommand {
        this.commands[info.name] = info;
        let commandIndex = (this.args||[]).findIndex(a=>a===info.name);
        if (commandIndex !== -1 || info.name === (this.options as CliAppConfig).defaultCommandName) {
            this.defaultCommand = true;
            let commandInst:RegisteredCommand = new RegisteredCommand(
                info.name, commandIndex, (this.args||[]).slice(commandIndex + 1),
                info.run
            );
            this.commands[info.name] = commandInst;
            if (info.options) for (let option in info.options) {
                commandInst.option(info.options[option]);
            }
            if (info.args) for (let arg in info.args) {
                commandInst.argument(info.args[arg]);
            }
            return commandInst;
        }
        return new RegisteredCommand(info.name, -1, []);
    }
}
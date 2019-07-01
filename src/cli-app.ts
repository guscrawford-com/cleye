import { RegisteredCommand } from "./registered-command";
import { StaticCommand } from "./models/command.interface";
export const DefaultDefaultCommandName = "default";
export interface CliAppConfig {
    defaultCommandName?:string
}
export class CliApp {

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
        protected args:string[],
        protected options?:CliAppConfig
    ) {
        this.nodeRuntime = args.shift() || this.nodeRuntime;
        this.binRuntime = args.shift() || this.binRuntime;
        if (!this.options) this.options = {};
        if (!this.options.defaultCommandName) this.options.defaultCommandName = DefaultDefaultCommandName;
    }

    /**
     * Register a command on `this` cli
     * @param info A `StaticCommand` command defintion
     */
    command (info:StaticCommand):RegisteredCommand {
        this.commands[info.name] = info;
        let commandIndex = this.args.findIndex(a=>a===info.name);
        if (commandIndex !== -1 || info.name === (this.options as CliAppConfig).defaultCommandName) {
            let commandInst:RegisteredCommand = new RegisteredCommand(
                info.name, commandIndex, this.args.slice(commandIndex + 1)
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
import { Command } from "./command";

export class Arguments {

    /**
     * The path to the node.exe runtime executing with these arguments
     */
    nodeRuntime:string ="";

    /**
     * The path to the JavaScript entry being run by the node runtime
     */
    binRuntime:string = "";

    protected commands:{[key:string]:Command} = {};
    constructor (
        protected args:string[]
    ) {
        this.nodeRuntime = args.shift() || this.nodeRuntime;
        this.binRuntime = args.shift() || this.binRuntime;
    }

    async command (name:string):Promise<Command|null> {
        let commandIndex = this.args.findIndex(a=>a===name);
        if (commandIndex !== -1) {
            let commandInst:Command = new Command(
                name, commandIndex, this.args.slice(commandIndex+1)
            );
            return commandInst;
        }
        return null;
    }
}
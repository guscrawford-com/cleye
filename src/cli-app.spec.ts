import 'jasmine';
import { CliApp } from './cli-app';

describe('CliApp',()=>{
    let mockProcessArgV = ['node.exe','tests.js'];
    let cliApp;
    it ('runs',()=>{
        cliApp = new CliApp(mockProcessArgV);
        cliApp.command(
            {
                name:'run',
                options: {},
                args:{}
            }
        );
        expect(cliApp.binRuntime).toBe('tests.js');
    })
})
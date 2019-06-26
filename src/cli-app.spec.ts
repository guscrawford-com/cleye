import 'jasmine';
import { CliApp } from './cli-app';
import { RegisteredCommand } from './registered-command';
import { Command } from './models/command.interface';

describe('CliApp',()=>{
    var mockProcessArgV:string[];
    var cliApp:CliApp;
    var command:RegisteredCommand|Command;
    var commandDef = {
        name:'run',
        options: {
            xxYyZz:{
                spinalCaseName:'xx-yy-zz',
                flag:'x'
            } as any,

            aaaBbbCcc:{
                spinalCaseName:'aaa-bbb-ccc',
                flag:'a'
            } as any
        },
        args:{}
    };
    beforeEach(()=>{
        mockProcessArgV = ['node.exe','tests.js'];
    });
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
    });
    describe('options with w/s delimited option at tail',()=>{
        beforeEach(()=>{
            cliApp = new CliApp(mockProcessArgV.concat(['run','--xxYyZz=expected-value', '--aaa-bbb-ccc', 'abacus']));
            command = cliApp.command(commandDef);
        });
        it('--xxYyZz=expected-value form hydrates named option variables',()=>{
                
            expect((command.options.xxYyZz as any).value ).toBe('expected-value');
        });
        it('--aaa-bbb-ccc abacus form hydrates named option variables',()=>{
                
            expect((command.options.aaaBbbCcc as any).value ).toBe('abacus');
        });
    });
    describe('options with w/s delimited option at head',()=>{
        beforeEach(()=>{
            cliApp = new CliApp(mockProcessArgV.concat(['run', '--aaa-bbb-ccc', 'abacus','--xxYyZz=expected-value']));
            command = cliApp.command(commandDef);
        });
        it('--xxYyZz=expected-value form hydrates named option variables',()=>{
                
            expect((command.options.xxYyZz as any).value ).toBe('expected-value');
        });
        it('--aaa-bbb-ccc abacus form hydrates named option variables',()=>{
                
            expect((command.options.aaaBbbCcc as any).value ).toBe('abacus');
        });
    });
    describe('args first with options and w/s delimited option at head',()=>{
        beforeEach(()=>{
            cliApp = new CliApp(mockProcessArgV.concat(['run', 'arg1', '--aaa-bbb-ccc', 'abacus','--xxYyZz=expected-value']));
            command = cliApp.command(commandDef).argument({name:'arg1'});
        });
        it('arg1 value is arg1',()=>{
            expect((command.args.arg1 as any).value).toBe('arg1');
        })
        it('both option-forms hydrated named option variables',()=>{
            expect((command.options.xxYyZz as any).value ).toBe('expected-value');
            expect((command.options.aaaBbbCcc as any).value ).toBe('abacus');
        });
    });
    describe('args last with options and w/s delimited option at head',()=>{
        beforeEach(()=>{
            cliApp = new CliApp(mockProcessArgV.concat(['run', '--aaa-bbb-ccc', 'abacus','--xxYyZz=expected-value', 'arg1']));
            command = cliApp.command(commandDef).argument({name:'arg1'});
        });
        it('arg1 value is arg1',()=>{
            expect((command.args.arg1 as any).value).toBe('arg1');
        })
        it('both option-forms hydrated named option variables',()=>{
            expect((command.options.xxYyZz as any).value ).toBe('expected-value');
            expect((command.options.aaaBbbCcc as any).value ).toBe('abacus');
        });
    });
    describe('default commands need not be explicitly named on cli',()=>{
        beforeEach(()=>{
            cliApp = new CliApp(mockProcessArgV.concat(['--aaa-bbb-ccc', 'abacus','--xxYyZz=expected-value', 'arg1']));
            command = cliApp.command({...commandDef,name:'default'}).argument({name:'arg1'});
        });
        it('arg1 value is arg1',()=>{
            expect((command.args.arg1 as any).value).toBe('arg1');
        })
        it('both option-forms hydrated named option variables',()=>{
            expect((command.options.xxYyZz as any).value ).toBe('expected-value');
            expect((command.options.aaaBbbCcc as any).value ).toBe('abacus');
        });
    });
})
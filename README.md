# cl👁

**@guscrawford.com/cleye** */k'laɪ/*

The un-opnionated cli-library

## [📃 Docs](./docs/md/README.md)

----

## Off the Cuff Example

```

import { readFile, writeFile } from 'fs';
import { join } from 'path';
import { Templater } from '@guscrawford.com/json-xform';
import { CliApp, StaticOption } from '@guscrawford.com/cleye';
let app = new CliApp({
    {
        commands:{
            default:{
                name:'default',
                options: {
                    'out':{
                        spinalCaseName:'out',
                        flag:'o'
                    }
                },
                arguments:{
                    name:'template'
                },
                runs: command
            }
        }
    }
});
function command() {
    console.info(command);
    readFile(join(process.cwd(),(command.args.template as any).value),{encoding:'utf8'},(err, data)=>{
        if (err) throw err;
        try {
            writeFile(
                (command.options.out as any).value||(command.args.template as any).value, 
                JSON.stringify(new Templater(JSON.parse(data)).parse(), null, "  "),
                (err:any)=>{if (err)throw err}
            );
        } catch (e) {
            throw e;
        }
    });
}
```
## Develop & Contribute

```
$>yarn install
$>yarn build
$>yarn test
```

*Docs are generated on build; see **docs***
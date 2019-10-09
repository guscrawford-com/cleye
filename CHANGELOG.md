# cl👁

**@guscrawford.com/cleye** *k'lai*

The un-opnionated cli-library

----

## 0.0.1-alpha
### Jun 23 2019
#### Initial release

🎉🎈🎊

Initial draft of cleye released!

----

## 0.0.2-alpha
### Jun 26 2019
#### Add the 'default' command and fix argument ordering

- Naming a command `default` allows it to be parsed without specification. ([2](https://github.com/guscrawford-com/cleye/issues/2))
- Option ordering before or after args is fixed ([1](https://github.com/guscrawford-com/cleye/issues/1))

----

## 0.0.3-beta
### Jun 30 2019
#### Correct issues with certain command / arg definition approaches; add documentation

----

## 1.0.0
### Oct 9 2019
#### Broad clean-up

Add simpler syntax for defining a CLI app as illustrated

```
new CliApp(
    {
        commands:{
            default:{
                name:'default',
                options: {
                    verbose:{
                        spinalCaseName:'verbose',
                        flag:'v'
                    }
                },
                run:(app:CliApp)=>{
                    /* magic */
                }
            }
        }
    }
)
```
> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["command/base-command"](../modules/_command_base_command_.md) / [CommandDefinitionOrderError](_command_base_command_.commanddefinitionordererror.md) /

# Class: CommandDefinitionOrderError

Thrown when a command is manually instantiated out-of-order

## Hierarchy

* `Error`

  * **CommandDefinitionOrderError**

### Index

#### Constructors

* [constructor](_command_base_command_.commanddefinitionordererror.md#constructor)

#### Properties

* [internalStack](_command_base_command_.commanddefinitionordererror.md#internalstack)
* [message](_command_base_command_.commanddefinitionordererror.md#message)
* [name](_command_base_command_.commanddefinitionordererror.md#name)
* [stack](_command_base_command_.commanddefinitionordererror.md#optional-stack)
* [Error](_command_base_command_.commanddefinitionordererror.md#static-error)

## Constructors

###  constructor

\+ **new CommandDefinitionOrderError**(`parseStage`: *[ParseStage](../enums/_command_base_command_.parsestage.md)*): *[CommandDefinitionOrderError](_command_base_command_.commanddefinitionordererror.md)*

Defined in command/base-command.ts:16

**Parameters:**

Name | Type |
------ | ------ |
`parseStage` | [ParseStage](../enums/_command_base_command_.parsestage.md) |

**Returns:** *[CommandDefinitionOrderError](_command_base_command_.commanddefinitionordererror.md)*

## Properties

###  internalStack

• **internalStack**: *string[]* =  []

Defined in command/base-command.ts:20

___

###  message

• **message**: *string*

*Inherited from void*

Defined in C:/Users/guscr/@guscrawford.com/cleye/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:964

___

###  name

• **name**: *string*

*Inherited from void*

Defined in C:/Users/guscr/@guscrawford.com/cleye/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:963

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from void*

*Overrides void*

Defined in C:/Users/guscr/@guscrawford.com/cleye/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:965

___

### `Static` Error

▪ **Error**: *`ErrorConstructor`*

Defined in C:/Users/guscr/@guscrawford.com/cleye/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974
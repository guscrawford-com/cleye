> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["registered-command"](../modules/_registered_command_.md) / [CommandDefinitionOrderError](_registered_command_.commanddefinitionordererror.md) /

# Class: CommandDefinitionOrderError

Thrown when a command is manually instantiated out-of-order

## Hierarchy

* `Error`

  * **CommandDefinitionOrderError**

### Index

#### Constructors

* [constructor](_registered_command_.commanddefinitionordererror.md#constructor)

#### Properties

* [internalStack](_registered_command_.commanddefinitionordererror.md#internalstack)
* [message](_registered_command_.commanddefinitionordererror.md#message)
* [name](_registered_command_.commanddefinitionordererror.md#name)
* [stack](_registered_command_.commanddefinitionordererror.md#optional-stack)
* [Error](_registered_command_.commanddefinitionordererror.md#static-error)

## Constructors

###  constructor

\+ **new CommandDefinitionOrderError**(`parseStage`: *[ParseStage](../enums/_registered_command_.parsestage.md)*): *[CommandDefinitionOrderError](_registered_command_.commanddefinitionordererror.md)*

*Defined in [registered-command.ts:14](https://github.com/guscrawford-com/cleye/blob/c919695/src/registered-command.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`parseStage` | [ParseStage](../enums/_registered_command_.parsestage.md) |

**Returns:** *[CommandDefinitionOrderError](_registered_command_.commanddefinitionordererror.md)*

## Properties

###  internalStack

• **internalStack**: *string[]* =  []

*Defined in [registered-command.ts:18](https://github.com/guscrawford-com/cleye/blob/c919695/src/registered-command.ts#L18)*

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
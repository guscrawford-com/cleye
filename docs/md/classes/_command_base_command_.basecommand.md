> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["command/base-command"](../modules/_command_base_command_.md) / [BaseCommand](_command_base_command_.basecommand.md) /

# Class: BaseCommand

## Hierarchy

* **BaseCommand**

  * [RegistersArguments](_command_regsiters_arguments_.registersarguments.md)

## Implements

* [Command](../interfaces/_models_command_interface_.command.md)

### Index

#### Constructors

* [constructor](_command_base_command_.basecommand.md#constructor)

#### Properties

* [args](_command_base_command_.basecommand.md#args)
* [index](_command_base_command_.basecommand.md#index)
* [input](_command_base_command_.basecommand.md#protected-input)
* [name](_command_base_command_.basecommand.md#name)
* [options](_command_base_command_.basecommand.md#options)
* [parseStage](_command_base_command_.basecommand.md#protected-parsestage)
* [run](_command_base_command_.basecommand.md#optional-run)

#### Methods

* [getAbsoluteIndex](_command_base_command_.basecommand.md#protected-getabsoluteindex)
* [getCamelCase](_command_base_command_.basecommand.md#protected-getcamelcase)
* [getSpinalCase](_command_base_command_.basecommand.md#protected-getspinalcase)
* [protectCommandDefinitionOrder](_command_base_command_.basecommand.md#protected-protectcommanddefinitionorder)
* [validFlagOrOptionPrefix](_command_base_command_.basecommand.md#protected-validflagoroptionprefix)
* [validSpinalCase](_command_base_command_.basecommand.md#protected-validspinalcase)

## Constructors

###  constructor

\+ **new BaseCommand**(`name`: *string*, `index`: *number*, `input`: *string[]*, `run?`: *undefined | function*): *[BaseCommand](_command_base_command_.basecommand.md)*

Defined in command/base-command.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`index` | number |
`input` | string[] |
`run?` | undefined \| function |

**Returns:** *[BaseCommand](_command_base_command_.basecommand.md)*

## Properties

###  args

• **args**: *object*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[args](../interfaces/_models_command_interface_.command.md#args)*

Defined in command/base-command.ts:28

A table of *at least* `StaticArgument`s modeling arguments `this` command *could* be given; will be an instance of `Argument` with a non-negative index and a value if provided as input

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticArgument](../interfaces/_models_argument_interface_.staticargument.md) | [Argument](../interfaces/_models_argument_interface_.argument.md)

___

###  index

• **index**: *number*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[index](../interfaces/_models_command_interface_.command.md#index)*

Defined in command/base-command.ts:35

___

### `Protected` input

• **input**: *string[]*

Defined in command/base-command.ts:36

___

###  name

• **name**: *string*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[name](../interfaces/_models_command_interface_.command.md#name)*

Defined in command/base-command.ts:34

___

###  options

• **options**: *object*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[options](../interfaces/_models_command_interface_.command.md#options)*

Defined in command/base-command.ts:31

A table of *at least* `StaticOption`s modeling options `this` command *could* be given; will be an instance of `Option` with a non-negative index and a value if provided as input

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticOption](../interfaces/_models_option_interface_.staticoption.md) | [Option](../interfaces/_models_option_interface_.option.md)

___

### `Protected` parseStage

• **parseStage**: *[ParseStage](../enums/_command_base_command_.parsestage.md)* =  ParseStage.Constructing

Defined in command/base-command.ts:25

___

### `Optional` run

• **run**? : *undefined | function*

Defined in command/base-command.ts:37

## Methods

### `Protected` getAbsoluteIndex

▸ **getAbsoluteIndex**(`index`: *number*): *number*

Defined in command/base-command.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *number*

___

### `Protected` getCamelCase

▸ **getCamelCase**(`spinalCaseName`: *string*): *string*

Defined in command/base-command.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`spinalCaseName` | string |

**Returns:** *string*

___

### `Protected` getSpinalCase

▸ **getSpinalCase**(`camelCaseName`: *string*): *void*

Defined in command/base-command.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`camelCaseName` | string |

**Returns:** *void*

___

### `Protected` protectCommandDefinitionOrder

▸ **protectCommandDefinitionOrder**(`desiredStage`: *[ParseStage](../enums/_command_base_command_.parsestage.md)*): *undefined | [CommandDefinitionOrderError](_command_base_command_.commanddefinitionordererror.md)*

Defined in command/base-command.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`desiredStage` | [ParseStage](../enums/_command_base_command_.parsestage.md) |

**Returns:** *undefined | [CommandDefinitionOrderError](_command_base_command_.commanddefinitionordererror.md)*

___

### `Protected` validFlagOrOptionPrefix

▸ **validFlagOrOptionPrefix**(`inputIndex`: *number*): *boolean*

Defined in command/base-command.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`inputIndex` | number |

**Returns:** *boolean*

___

### `Protected` validSpinalCase

▸ **validSpinalCase**(`name`: *string*): *boolean*

Defined in command/base-command.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*
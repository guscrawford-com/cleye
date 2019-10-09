> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["command/regsiters-arguments"](../modules/_command_regsiters_arguments_.md) / [RegistersArguments](_command_regsiters_arguments_.registersarguments.md) /

# Class: RegistersArguments

## Hierarchy

* [BaseCommand](_command_base_command_.basecommand.md)

  * **RegistersArguments**

  * [RegistersOptions](_command_regsiters_options_.registersoptions.md)

## Implements

* [Command](../interfaces/_models_command_interface_.command.md)

### Index

#### Constructors

* [constructor](_command_regsiters_arguments_.registersarguments.md#constructor)

#### Properties

* [args](_command_regsiters_arguments_.registersarguments.md#args)
* [index](_command_regsiters_arguments_.registersarguments.md#index)
* [input](_command_regsiters_arguments_.registersarguments.md#protected-input)
* [name](_command_regsiters_arguments_.registersarguments.md#name)
* [options](_command_regsiters_arguments_.registersarguments.md#options)
* [parseStage](_command_regsiters_arguments_.registersarguments.md#protected-parsestage)
* [run](_command_regsiters_arguments_.registersarguments.md#optional-run)

#### Methods

* [argument](_command_regsiters_arguments_.registersarguments.md#argument)
* [getAbsoluteIndex](_command_regsiters_arguments_.registersarguments.md#protected-getabsoluteindex)
* [getArgument](_command_regsiters_arguments_.registersarguments.md#protected-getargument)
* [getCamelCase](_command_regsiters_arguments_.registersarguments.md#protected-getcamelcase)
* [getSpinalCase](_command_regsiters_arguments_.registersarguments.md#protected-getspinalcase)
* [protectCommandDefinitionOrder](_command_regsiters_arguments_.registersarguments.md#protected-protectcommanddefinitionorder)
* [validFlagOrOptionPrefix](_command_regsiters_arguments_.registersarguments.md#protected-validflagoroptionprefix)
* [validSpinalCase](_command_regsiters_arguments_.registersarguments.md#protected-validspinalcase)

## Constructors

###  constructor

\+ **new RegistersArguments**(`name`: *string*, `index`: *number*, `input`: *string[]*, `run?`: *undefined | function*): *[RegistersArguments](_command_regsiters_arguments_.registersarguments.md)*

*Overrides [BaseCommand](_command_base_command_.basecommand.md).[constructor](_command_base_command_.basecommand.md#constructor)*

Defined in command/regsiters-arguments.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`index` | number |
`input` | string[] |
`run?` | undefined \| function |

**Returns:** *[RegistersArguments](_command_regsiters_arguments_.registersarguments.md)*

## Properties

###  args

• **args**: *object*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[args](../interfaces/_models_command_interface_.command.md#args)*

*Inherited from [BaseCommand](_command_base_command_.basecommand.md).[args](_command_base_command_.basecommand.md#args)*

Defined in command/base-command.ts:28

A table of *at least* `StaticArgument`s modeling arguments `this` command *could* be given; will be an instance of `Argument` with a non-negative index and a value if provided as input

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticArgument](../interfaces/_models_argument_interface_.staticargument.md) | [Argument](../interfaces/_models_argument_interface_.argument.md)

___

###  index

• **index**: *number*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[index](../interfaces/_models_command_interface_.command.md#index)*

*Overrides [BaseCommand](_command_base_command_.basecommand.md).[index](_command_base_command_.basecommand.md#index)*

Defined in command/regsiters-arguments.ts:7

___

### `Protected` input

• **input**: *string[]*

*Overrides [BaseCommand](_command_base_command_.basecommand.md).[input](_command_base_command_.basecommand.md#protected-input)*

Defined in command/regsiters-arguments.ts:8

___

###  name

• **name**: *string*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[name](../interfaces/_models_command_interface_.command.md#name)*

*Overrides [BaseCommand](_command_base_command_.basecommand.md).[name](_command_base_command_.basecommand.md#name)*

Defined in command/regsiters-arguments.ts:6

___

###  options

• **options**: *object*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[options](../interfaces/_models_command_interface_.command.md#options)*

*Inherited from [BaseCommand](_command_base_command_.basecommand.md).[options](_command_base_command_.basecommand.md#options)*

Defined in command/base-command.ts:31

A table of *at least* `StaticOption`s modeling options `this` command *could* be given; will be an instance of `Option` with a non-negative index and a value if provided as input

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticOption](../interfaces/_models_option_interface_.staticoption.md) | [Option](../interfaces/_models_option_interface_.option.md)

___

### `Protected` parseStage

• **parseStage**: *[ParseStage](../enums/_command_base_command_.parsestage.md)* =  ParseStage.Constructing

*Inherited from [BaseCommand](_command_base_command_.basecommand.md).[parseStage](_command_base_command_.basecommand.md#protected-parsestage)*

Defined in command/base-command.ts:25

___

### `Optional` run

• **run**? : *undefined | function*

*Overrides [BaseCommand](_command_base_command_.basecommand.md).[run](_command_base_command_.basecommand.md#optional-run)*

Defined in command/regsiters-arguments.ts:9

## Methods

###  argument

▸ **argument**(`info`: *[StaticArgument](../interfaces/_models_argument_interface_.staticargument.md)*): *`this`*

Defined in command/regsiters-arguments.ts:18

Register an argument on `this` command

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [StaticArgument](../interfaces/_models_argument_interface_.staticargument.md) | A `StaticArgument` command argument defintion  |

**Returns:** *`this`*

___

### `Protected` getAbsoluteIndex

▸ **getAbsoluteIndex**(`index`: *number*): *number*

*Inherited from [BaseCommand](_command_base_command_.basecommand.md).[getAbsoluteIndex](_command_base_command_.basecommand.md#protected-getabsoluteindex)*

Defined in command/base-command.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *number*

___

### `Protected` getArgument

▸ **getArgument**(`info`: *[StaticArgument](../interfaces/_models_argument_interface_.staticargument.md)*): *[Argument](../interfaces/_models_argument_interface_.argument.md)*

Defined in command/regsiters-arguments.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`info` | [StaticArgument](../interfaces/_models_argument_interface_.staticargument.md) |

**Returns:** *[Argument](../interfaces/_models_argument_interface_.argument.md)*

___

### `Protected` getCamelCase

▸ **getCamelCase**(`spinalCaseName`: *string*): *string*

*Inherited from [BaseCommand](_command_base_command_.basecommand.md).[getCamelCase](_command_base_command_.basecommand.md#protected-getcamelcase)*

Defined in command/base-command.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`spinalCaseName` | string |

**Returns:** *string*

___

### `Protected` getSpinalCase

▸ **getSpinalCase**(`camelCaseName`: *string*): *void*

*Inherited from [BaseCommand](_command_base_command_.basecommand.md).[getSpinalCase](_command_base_command_.basecommand.md#protected-getspinalcase)*

Defined in command/base-command.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`camelCaseName` | string |

**Returns:** *void*

___

### `Protected` protectCommandDefinitionOrder

▸ **protectCommandDefinitionOrder**(`desiredStage`: *[ParseStage](../enums/_command_base_command_.parsestage.md)*): *undefined | [CommandDefinitionOrderError](_command_base_command_.commanddefinitionordererror.md)*

*Inherited from [BaseCommand](_command_base_command_.basecommand.md).[protectCommandDefinitionOrder](_command_base_command_.basecommand.md#protected-protectcommanddefinitionorder)*

Defined in command/base-command.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`desiredStage` | [ParseStage](../enums/_command_base_command_.parsestage.md) |

**Returns:** *undefined | [CommandDefinitionOrderError](_command_base_command_.commanddefinitionordererror.md)*

___

### `Protected` validFlagOrOptionPrefix

▸ **validFlagOrOptionPrefix**(`inputIndex`: *number*): *boolean*

*Inherited from [BaseCommand](_command_base_command_.basecommand.md).[validFlagOrOptionPrefix](_command_base_command_.basecommand.md#protected-validflagoroptionprefix)*

Defined in command/base-command.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`inputIndex` | number |

**Returns:** *boolean*

___

### `Protected` validSpinalCase

▸ **validSpinalCase**(`name`: *string*): *boolean*

*Inherited from [BaseCommand](_command_base_command_.basecommand.md).[validSpinalCase](_command_base_command_.basecommand.md#protected-validspinalcase)*

Defined in command/base-command.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*
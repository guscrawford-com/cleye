> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["command/registered-command"](../modules/_command_registered_command_.md) / [RegisteredCommand](_command_registered_command_.registeredcommand.md) /

# Class: RegisteredCommand

A command that was picked up in input and parsed for it's *args* and *options* if any

## Hierarchy

  * [RegistersOptions](_command_regsiters_options_.registersoptions.md)

  * **RegisteredCommand**

## Implements

* [Command](../interfaces/_models_command_interface_.command.md)
* [Command](../interfaces/_models_command_interface_.command.md)

### Index

#### Constructors

* [constructor](_command_registered_command_.registeredcommand.md#constructor)

#### Properties

* [args](_command_registered_command_.registeredcommand.md#args)
* [index](_command_registered_command_.registeredcommand.md#index)
* [input](_command_registered_command_.registeredcommand.md#protected-input)
* [name](_command_registered_command_.registeredcommand.md#name)
* [options](_command_registered_command_.registeredcommand.md#options)
* [parseStage](_command_registered_command_.registeredcommand.md#protected-parsestage)
* [run](_command_registered_command_.registeredcommand.md#optional-run)

#### Methods

* [argument](_command_registered_command_.registeredcommand.md#argument)
* [getAbsoluteIndex](_command_registered_command_.registeredcommand.md#protected-getabsoluteindex)
* [getArgument](_command_registered_command_.registeredcommand.md#protected-getargument)
* [getCamelCase](_command_registered_command_.registeredcommand.md#protected-getcamelcase)
* [getOptionIndex](_command_registered_command_.registeredcommand.md#protected-getoptionindex)
* [getOptionValue](_command_registered_command_.registeredcommand.md#protected-getoptionvalue)
* [getSpinalCase](_command_registered_command_.registeredcommand.md#protected-getspinalcase)
* [option](_command_registered_command_.registeredcommand.md#option)
* [protectCommandDefinitionOrder](_command_registered_command_.registeredcommand.md#protected-protectcommanddefinitionorder)
* [validFlagOrOptionPrefix](_command_registered_command_.registeredcommand.md#protected-validflagoroptionprefix)
* [validSpinalCase](_command_registered_command_.registeredcommand.md#protected-validspinalcase)

## Constructors

###  constructor

\+ **new RegisteredCommand**(`name`: *string*, `index`: *number*, `input`: *string[]*, `run?`: *undefined | function*): *[RegisteredCommand](_command_registered_command_.registeredcommand.md)*

*Overrides [RegistersOptions](_command_regsiters_options_.registersoptions.md).[constructor](_command_regsiters_options_.registersoptions.md#constructor)*

Defined in command/registered-command.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`index` | number |
`input` | string[] |
`run?` | undefined \| function |

**Returns:** *[RegisteredCommand](_command_registered_command_.registeredcommand.md)*

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

*Overrides [RegistersOptions](_command_regsiters_options_.registersoptions.md).[index](_command_regsiters_options_.registersoptions.md#index)*

Defined in command/registered-command.ts:15

___

### `Protected` input

• **input**: *string[]*

*Overrides [RegistersOptions](_command_regsiters_options_.registersoptions.md).[input](_command_regsiters_options_.registersoptions.md#protected-input)*

Defined in command/registered-command.ts:16

___

###  name

• **name**: *string*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[name](../interfaces/_models_command_interface_.command.md#name)*

*Overrides [RegistersOptions](_command_regsiters_options_.registersoptions.md).[name](_command_regsiters_options_.registersoptions.md#name)*

Defined in command/registered-command.ts:14

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

*Overrides [RegistersOptions](_command_regsiters_options_.registersoptions.md).[run](_command_regsiters_options_.registersoptions.md#optional-run)*

Defined in command/registered-command.ts:17

## Methods

###  argument

▸ **argument**(`info`: *[StaticArgument](../interfaces/_models_argument_interface_.staticargument.md)*): *`this`*

*Inherited from [RegistersArguments](_command_regsiters_arguments_.registersarguments.md).[argument](_command_regsiters_arguments_.registersarguments.md#argument)*

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

*Inherited from [RegistersArguments](_command_regsiters_arguments_.registersarguments.md).[getArgument](_command_regsiters_arguments_.registersarguments.md#protected-getargument)*

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

### `Protected` getOptionIndex

▸ **getOptionIndex**(`name`: *string*, `flag?`: *undefined | string*, `usesCamelCase`: *boolean*): *[OptionIndex](../interfaces/_command_regsiters_options_.optionindex.md) | null*

*Inherited from [RegistersOptions](_command_regsiters_options_.registersoptions.md).[getOptionIndex](_command_regsiters_options_.registersoptions.md#protected-getoptionindex)*

Defined in command/regsiters-options.ts:48

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`flag?` | undefined \| string | - |
`usesCamelCase` | boolean | false |

**Returns:** *[OptionIndex](../interfaces/_command_regsiters_options_.optionindex.md) | null*

___

### `Protected` getOptionValue

▸ **getOptionValue**(`optionIndex`: *[OptionIndex](../interfaces/_command_regsiters_options_.optionindex.md)*): *[OptionIndex](../interfaces/_command_regsiters_options_.optionindex.md)*

*Inherited from [RegistersOptions](_command_regsiters_options_.registersoptions.md).[getOptionValue](_command_regsiters_options_.registersoptions.md#protected-getoptionvalue)*

Defined in command/regsiters-options.ts:78

**Parameters:**

Name | Type |
------ | ------ |
`optionIndex` | [OptionIndex](../interfaces/_command_regsiters_options_.optionindex.md) |

**Returns:** *[OptionIndex](../interfaces/_command_regsiters_options_.optionindex.md)*

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

###  option

▸ **option**(`info`: *[StaticOption](../interfaces/_models_option_interface_.staticoption.md)*): *[RegisteredCommand](_command_registered_command_.registeredcommand.md)*

*Inherited from [RegistersOptions](_command_regsiters_options_.registersoptions.md).[option](_command_regsiters_options_.registersoptions.md#option)*

Defined in command/regsiters-options.ts:19

Register an option on `this` command

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [StaticOption](../interfaces/_models_option_interface_.staticoption.md) | A `StaticOption` command option defintion  |

**Returns:** *[RegisteredCommand](_command_registered_command_.registeredcommand.md)*

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
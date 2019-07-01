> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["registered-command"](../modules/_registered_command_.md) / [RegisteredCommand](_registered_command_.registeredcommand.md) /

# Class: RegisteredCommand

A command that was picked up in input and parsed for it's *args* and *options* if any

## Hierarchy

* **RegisteredCommand**

## Implements

* [Command](../interfaces/_models_command_interface_.command.md)

### Index

#### Constructors

* [constructor](_registered_command_.registeredcommand.md#constructor)

#### Properties

* [args](_registered_command_.registeredcommand.md#args)
* [index](_registered_command_.registeredcommand.md#index)
* [input](_registered_command_.registeredcommand.md#protected-input)
* [name](_registered_command_.registeredcommand.md#name)
* [options](_registered_command_.registeredcommand.md#options)
* [parseStage](_registered_command_.registeredcommand.md#protected-parsestage)

#### Methods

* [argument](_registered_command_.registeredcommand.md#argument)
* [getAbsoluteIndex](_registered_command_.registeredcommand.md#protected-getabsoluteindex)
* [getArgument](_registered_command_.registeredcommand.md#protected-getargument)
* [getCamelCase](_registered_command_.registeredcommand.md#protected-getcamelcase)
* [getOptionIndex](_registered_command_.registeredcommand.md#protected-getoptionindex)
* [getOptionValue](_registered_command_.registeredcommand.md#protected-getoptionvalue)
* [getSpinalCase](_registered_command_.registeredcommand.md#protected-getspinalcase)
* [option](_registered_command_.registeredcommand.md#option)
* [protectCommandDefinitionOrder](_registered_command_.registeredcommand.md#protected-protectcommanddefinitionorder)
* [validFlagOrOptionPrefix](_registered_command_.registeredcommand.md#protected-validflagoroptionprefix)
* [validSpinalCase](_registered_command_.registeredcommand.md#protected-validspinalcase)

## Constructors

###  constructor

\+ **new RegisteredCommand**(`name`: *string*, `index`: *number*, `input`: *string[]*): *[RegisteredCommand](_registered_command_.registeredcommand.md)*

*Defined in [registered-command.ts:27](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`index` | number |
`input` | string[] |

**Returns:** *[RegisteredCommand](_registered_command_.registeredcommand.md)*

## Properties

###  args

• **args**: *object*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[args](../interfaces/_models_command_interface_.command.md#args)*

*Defined in [registered-command.ts:24](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L24)*

A table of *at least* `StaticArgument`s modeling arguments `this` command *could* be given; will be an instance of `Argument` with a non-negative index and a value if provided as input

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticArgument](../interfaces/_models_argument_interface_.staticargument.md)

___

###  index

• **index**: *number*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[index](../interfaces/_models_command_interface_.command.md#index)*

*Defined in [registered-command.ts:30](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L30)*

___

### `Protected` input

• **input**: *string[]*

*Defined in [registered-command.ts:31](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L31)*

___

###  name

• **name**: *string*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[name](../interfaces/_models_command_interface_.command.md#name)*

*Defined in [registered-command.ts:29](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L29)*

___

###  options

• **options**: *object*

*Implementation of [Command](../interfaces/_models_command_interface_.command.md).[options](../interfaces/_models_command_interface_.command.md#options)*

*Defined in [registered-command.ts:27](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L27)*

A table of *at least* `StaticOption`s modeling options `this` command *could* be given; will be an instance of `Option` with a non-negative index and a value if provided as input

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticOption](../interfaces/_models_option_interface_.staticoption.md)

___

### `Protected` parseStage

• **parseStage**: *[ParseStage](../enums/_registered_command_.parsestage.md)* =  ParseStage.Constructing

*Defined in [registered-command.ts:35](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L35)*

## Methods

###  argument

▸ **argument**(`info`: *[StaticArgument](../interfaces/_models_argument_interface_.staticargument.md)*): *`this`*

*Defined in [registered-command.ts:73](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L73)*

Register an argument on `this` command

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [StaticArgument](../interfaces/_models_argument_interface_.staticargument.md) | A `StaticArgument` command argument defintion  |

**Returns:** *`this`*

___

### `Protected` getAbsoluteIndex

▸ **getAbsoluteIndex**(`index`: *number*): *number*

*Defined in [registered-command.ts:157](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *number*

___

### `Protected` getArgument

▸ **getArgument**(`info`: *[StaticArgument](../interfaces/_models_argument_interface_.staticargument.md)*): *[Argument](../interfaces/_models_argument_interface_.argument.md)*

*Defined in [registered-command.ts:87](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [StaticArgument](../interfaces/_models_argument_interface_.staticargument.md) |

**Returns:** *[Argument](../interfaces/_models_argument_interface_.argument.md)*

___

### `Protected` getCamelCase

▸ **getCamelCase**(`spinalCaseName`: *string*): *string*

*Defined in [registered-command.ts:160](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`spinalCaseName` | string |

**Returns:** *string*

___

### `Protected` getOptionIndex

▸ **getOptionIndex**(`name`: *string*, `flag?`: *undefined | string*, `usesCamelCase`: *boolean*): *[OptionIndex](../interfaces/_registered_command_.optionindex.md) | null*

*Defined in [registered-command.ts:108](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L108)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`flag?` | undefined \| string | - |
`usesCamelCase` | boolean | false |

**Returns:** *[OptionIndex](../interfaces/_registered_command_.optionindex.md) | null*

___

### `Protected` getOptionValue

▸ **getOptionValue**(`optionIndex`: *[OptionIndex](../interfaces/_registered_command_.optionindex.md)*): *[OptionIndex](../interfaces/_registered_command_.optionindex.md)*

*Defined in [registered-command.ts:138](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`optionIndex` | [OptionIndex](../interfaces/_registered_command_.optionindex.md) |

**Returns:** *[OptionIndex](../interfaces/_registered_command_.optionindex.md)*

___

### `Protected` getSpinalCase

▸ **getSpinalCase**(`camelCaseName`: *string*): *void*

*Defined in [registered-command.ts:170](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`camelCaseName` | string |

**Returns:** *void*

___

###  option

▸ **option**(`info`: *[StaticOption](../interfaces/_models_option_interface_.staticoption.md)*): *[RegisteredCommand](_registered_command_.registeredcommand.md)*

*Defined in [registered-command.ts:40](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L40)*

Register an option on `this` command

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [StaticOption](../interfaces/_models_option_interface_.staticoption.md) | A `StaticOption` command option defintion  |

**Returns:** *[RegisteredCommand](_registered_command_.registeredcommand.md)*

___

### `Protected` protectCommandDefinitionOrder

▸ **protectCommandDefinitionOrder**(`desiredStage`: *[ParseStage](../enums/_registered_command_.parsestage.md)*): *undefined | [CommandDefinitionOrderError](_registered_command_.commanddefinitionordererror.md)*

*Defined in [registered-command.ts:80](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`desiredStage` | [ParseStage](../enums/_registered_command_.parsestage.md) |

**Returns:** *undefined | [CommandDefinitionOrderError](_registered_command_.commanddefinitionordererror.md)*

___

### `Protected` validFlagOrOptionPrefix

▸ **validFlagOrOptionPrefix**(`inputIndex`: *number*): *boolean*

*Defined in [registered-command.ts:183](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L183)*

**Parameters:**

Name | Type |
------ | ------ |
`inputIndex` | number |

**Returns:** *boolean*

___

### `Protected` validSpinalCase

▸ **validSpinalCase**(`name`: *string*): *boolean*

*Defined in [registered-command.ts:177](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/registered-command.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*
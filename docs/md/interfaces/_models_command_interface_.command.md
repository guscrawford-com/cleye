> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["models/command.interface"](../modules/_models_command_interface_.md) / [Command](_models_command_interface_.command.md) /

# Interface: Command

A further processed extension of a programmer-defined command with an assured set of `StaticArgument`s and `StaticOption`s realized

## Hierarchy

  * [Argument](_models_argument_interface_.argument.md)

* [StaticArgument](_models_argument_interface_.staticargument.md)

  * **Command**

## Implemented by

* [BaseCommand](../classes/_command_base_command_.basecommand.md)
* [RegisteredCommand](../classes/_command_registered_command_.registeredcommand.md)
* [RegisteredCommand](../classes/_command_registered_command_.registeredcommand.md)
* [RegistersArguments](../classes/_command_regsiters_arguments_.registersarguments.md)
* [RegistersOptions](../classes/_command_regsiters_options_.registersoptions.md)

### Index

#### Properties

* [args](_models_command_interface_.command.md#args)
* [directive](_models_command_interface_.command.md#optional-directive)
* [index](_models_command_interface_.command.md#index)
* [name](_models_command_interface_.command.md#name)
* [options](_models_command_interface_.command.md#options)
* [value](_models_command_interface_.command.md#optional-value)

## Properties

###  args

• **args**: *object*

*Defined in [models/command.interface.ts:15](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/command.interface.ts#L15)*

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticArgument](_models_argument_interface_.staticargument.md) | [Argument](_models_argument_interface_.argument.md)

___

### `Optional` directive

• **directive**? : *[ArgumentDirective](../modules/_models_argument_interface_.md#argumentdirective)*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[directive](_models_argument_interface_.staticargument.md#optional-directive)*

*Overrides [StaticArgument](_models_argument_interface_.staticargument.md).[directive](_models_argument_interface_.staticargument.md#optional-directive)*

*Defined in [models/argument.interface.ts:8](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L8)*

**`deprecated`** in which order to process this argument

___

###  index

• **index**: *number*

*Inherited from [Argument](_models_argument_interface_.argument.md).[index](_models_argument_interface_.argument.md#index)*

*Defined in [models/argument.interface.ts:19](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L19)*

The index of the argument in the command-input relative to the index of the command

___

###  name

• **name**: *string*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[name](_models_argument_interface_.staticargument.md#name)*

*Overrides [StaticArgument](_models_argument_interface_.staticargument.md).[name](_models_argument_interface_.staticargument.md#name)*

*Defined in [models/argument.interface.ts:10](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L10)*

A name (in any form) with which to assign and reference this argument on the `<command>.args` table

___

###  options

• **options**: *object*

*Defined in [models/command.interface.ts:14](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/command.interface.ts#L14)*

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticOption](_models_option_interface_.staticoption.md) | [Option](_models_option_interface_.option.md)

___

### `Optional` value

• **value**? : *undefined | string*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[value](_models_argument_interface_.staticargument.md#optional-value)*

*Overrides [StaticArgument](_models_argument_interface_.staticargument.md).[value](_models_argument_interface_.staticargument.md#optional-value)*

*Defined in [models/argument.interface.ts:12](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L12)*

The possible value of the argument if provided
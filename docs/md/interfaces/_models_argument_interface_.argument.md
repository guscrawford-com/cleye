> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["models/argument.interface"](../modules/_models_argument_interface_.md) / [Argument](_models_argument_interface_.argument.md) /

# Interface: Argument

A further processed extension of a programmer-defined argument with an assured *index* (possibly -1 or 'not there') and possible `value` (if provided in command-line input) realized

## Hierarchy

* [StaticArgument](_models_argument_interface_.staticargument.md)

  * **Argument**

  * [Option](_models_option_interface_.option.md)

  * [Command](_models_command_interface_.command.md)

### Index

#### Properties

* [directive](_models_argument_interface_.argument.md#optional-directive)
* [index](_models_argument_interface_.argument.md#index)
* [name](_models_argument_interface_.argument.md#name)
* [value](_models_argument_interface_.argument.md#optional-value)

## Properties

### `Optional` directive

• **directive**? : *[ArgumentDirective](../modules/_models_argument_interface_.md#argumentdirective)*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[directive](_models_argument_interface_.staticargument.md#optional-directive)*

*Defined in [models/argument.interface.ts:8](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L8)*

**`deprecated`** in which order to process this argument

___

###  index

• **index**: *number*

*Defined in [models/argument.interface.ts:19](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L19)*

The index of the argument in the command-input relative to the index of the command

___

###  name

• **name**: *string*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[name](_models_argument_interface_.staticargument.md#name)*

*Defined in [models/argument.interface.ts:10](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L10)*

A name (in any form) with which to assign and reference this argument on the `<command>.args` table

___

### `Optional` value

• **value**? : *undefined | string*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[value](_models_argument_interface_.staticargument.md#optional-value)*

*Defined in [models/argument.interface.ts:12](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L12)*

The possible value of the argument if provided
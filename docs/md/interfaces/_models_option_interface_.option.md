> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["models/option.interface"](../modules/_models_option_interface_.md) / [Option](_models_option_interface_.option.md) /

# Interface: Option

A further processed extension of a programmer-defined option with an assured *camelCaseName* realized

## Hierarchy

  * [Argument](_models_argument_interface_.argument.md)

  * [StaticOption](_models_option_interface_.staticoption.md)

  * **Option**

### Index

#### Properties

* [camelCaseName](_models_option_interface_.option.md#camelcasename)
* [directive](_models_option_interface_.option.md#optional-directive)
* [flag](_models_option_interface_.option.md#optional-flag)
* [index](_models_option_interface_.option.md#index)
* [name](_models_option_interface_.option.md#name)
* [spinalCaseName](_models_option_interface_.option.md#spinalcasename)
* [value](_models_option_interface_.option.md#optional-value)

## Properties

###  camelCaseName

• **camelCaseName**: *string*

*Defined in [models/option.interface.ts:12](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/option.interface.ts#L12)*

The *camelCase* form of the option name to appear on the `<command>.options` table; matched on the command-line following the `--` prefix (in addition to it's *spinal-case* form)

___

### `Optional` directive

• **directive**? : *[ArgumentDirective](../modules/_models_argument_interface_.md#argumentdirective)*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[directive](_models_argument_interface_.staticargument.md#optional-directive)*

*Overrides [StaticArgument](_models_argument_interface_.staticargument.md).[directive](_models_argument_interface_.staticargument.md#optional-directive)*

*Defined in [models/argument.interface.ts:8](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L8)*

**`deprecated`** in which order to process this argument

___

### `Optional` flag

• **flag**? : *undefined | string*

*Inherited from [StaticOption](_models_option_interface_.staticoption.md).[flag](_models_option_interface_.staticoption.md#optional-flag)*

*Defined in [models/option.interface.ts:7](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/option.interface.ts#L7)*

An optional alias (intended to be a short-hand or single character) matched with a `-` prefix

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

###  spinalCaseName

• **spinalCaseName**: *string*

*Inherited from [StaticOption](_models_option_interface_.staticoption.md).[spinalCaseName](_models_option_interface_.staticoption.md#spinalcasename)*

*Defined in [models/option.interface.ts:5](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/option.interface.ts#L5)*

The *spinal-case* form of the option name to appear in *camelCase* on the `<command>.options` table; both of which are matched on the command-line following the `--` prefix

___

### `Optional` value

• **value**? : *undefined | string*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[value](_models_argument_interface_.staticargument.md#optional-value)*

*Overrides [StaticArgument](_models_argument_interface_.staticargument.md).[value](_models_argument_interface_.staticargument.md#optional-value)*

*Defined in [models/argument.interface.ts:12](https://github.com/guscrawford-com/cleye/blob/ffc0fee/src/models/argument.interface.ts#L12)*

The possible value of the argument if provided
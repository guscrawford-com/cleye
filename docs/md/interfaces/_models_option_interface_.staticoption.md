> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["models/option.interface"](../modules/_models_option_interface_.md) / [StaticOption](_models_option_interface_.staticoption.md) /

# Interface: StaticOption

The fundamental programmer-provided definition of an option a `Command` can receive on the command-line

## Hierarchy

* [StaticArgument](_models_argument_interface_.staticargument.md)

  * **StaticOption**

  * [Option](_models_option_interface_.option.md)

### Index

#### Properties

* [directive](_models_option_interface_.staticoption.md#optional-directive)
* [flag](_models_option_interface_.staticoption.md#optional-flag)
* [name](_models_option_interface_.staticoption.md#name)
* [spinalCaseName](_models_option_interface_.staticoption.md#spinalcasename)

## Properties

### `Optional` directive

• **directive**? : *[ArgumentDirective](../modules/_models_argument_interface_.md#argumentdirective)*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[directive](_models_argument_interface_.staticargument.md#optional-directive)*

*Defined in [models/argument.interface.ts:8](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/models/argument.interface.ts#L8)*

**`deprecated`** in which order to process this argument

___

### `Optional` flag

• **flag**? : *undefined | string*

*Defined in [models/option.interface.ts:7](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/models/option.interface.ts#L7)*

An optional alias (intended to be a short-hand or single character) matched with a `-` prefix

___

###  name

• **name**: *string*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[name](_models_argument_interface_.staticargument.md#name)*

*Defined in [models/argument.interface.ts:10](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/models/argument.interface.ts#L10)*

A name (in any form) with which to assign and reference this argument on the `<command>.args` table

___

###  spinalCaseName

• **spinalCaseName**: *string*

*Defined in [models/option.interface.ts:5](https://github.com/guscrawford-com/cleye/blob/6a04a70/src/models/option.interface.ts#L5)*

The *spinal-case* form of the option name to appear in *camelCase* on the `<command>.options` table; both of which are matched on the command-line following the `--` prefix
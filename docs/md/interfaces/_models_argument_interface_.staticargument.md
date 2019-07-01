> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["models/argument.interface"](../modules/_models_argument_interface_.md) / [StaticArgument](_models_argument_interface_.staticargument.md) /

# Interface: StaticArgument

The fundamental programmer-provided definition of an argument a `Command` can receive on the command-line

## Hierarchy

* **StaticArgument**

  * [Argument](_models_argument_interface_.argument.md)

  * [StaticOption](_models_option_interface_.staticoption.md)

  * [StaticCommand](_models_command_interface_.staticcommand.md)

  * [Command](_models_command_interface_.command.md)

### Index

#### Properties

* [directive](_models_argument_interface_.staticargument.md#optional-directive)
* [name](_models_argument_interface_.staticargument.md#name)

## Properties

### `Optional` directive

• **directive**? : *[ArgumentDirective](../modules/_models_argument_interface_.md#argumentdirective)*

*Defined in [models/argument.interface.ts:8](https://github.com/guscrawford-com/cleye/blob/c919695/src/models/argument.interface.ts#L8)*

**`deprecated`** in which order to process this argument

___

###  name

• **name**: *string*

*Defined in [models/argument.interface.ts:10](https://github.com/guscrawford-com/cleye/blob/c919695/src/models/argument.interface.ts#L10)*

A name (in any form) with which to assign and reference this argument on the `<command>.args` table
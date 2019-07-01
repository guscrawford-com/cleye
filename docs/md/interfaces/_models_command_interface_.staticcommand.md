> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["models/command.interface"](../modules/_models_command_interface_.md) / [StaticCommand](_models_command_interface_.staticcommand.md) /

# Interface: StaticCommand

The fundamental programmer-provided definition of a `Command` and it's plausible set of `StaticArgument`s and `StaticOption`s it can receive on the command-line

## Hierarchy

* [StaticArgument](_models_argument_interface_.staticargument.md)

  * **StaticCommand**

### Index

#### Properties

* [args](_models_command_interface_.staticcommand.md#optional-args)
* [directive](_models_command_interface_.staticcommand.md#optional-directive)
* [name](_models_command_interface_.staticcommand.md#name)
* [options](_models_command_interface_.staticcommand.md#optional-options)

## Properties

### `Optional` args

• **args**? : *undefined | object*

*Defined in [models/command.interface.ts:8](https://github.com/guscrawford-com/cleye/blob/c919695/src/models/command.interface.ts#L8)*

___

### `Optional` directive

• **directive**? : *[ArgumentDirective](../modules/_models_argument_interface_.md#argumentdirective)*

*Inherited from [StaticArgument](_models_argument_interface_.staticargument.md).[directive](_models_argument_interface_.staticargument.md#optional-directive)*

*Defined in [models/argument.interface.ts:8](https://github.com/guscrawford-com/cleye/blob/c919695/src/models/argument.interface.ts#L8)*

**`deprecated`** in which order to process this argument

___

###  name

• **name**: *string*

*Overrides [StaticArgument](_models_argument_interface_.staticargument.md).[name](_models_argument_interface_.staticargument.md#name)*

*Defined in [models/command.interface.ts:6](https://github.com/guscrawford-com/cleye/blob/c919695/src/models/command.interface.ts#L6)*

___

### `Optional` options

• **options**? : *undefined | object*

*Defined in [models/command.interface.ts:7](https://github.com/guscrawford-com/cleye/blob/c919695/src/models/command.interface.ts#L7)*
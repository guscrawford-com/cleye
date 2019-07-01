> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["cli-app"](../modules/_cli_app_.md) / [CliApp](_cli_app_.cliapp.md) /

# Class: CliApp

## Hierarchy

* **CliApp**

### Index

#### Constructors

* [constructor](_cli_app_.cliapp.md#constructor)

#### Properties

* [args](_cli_app_.cliapp.md#protected-args)
* [binRuntime](_cli_app_.cliapp.md#binruntime)
* [commands](_cli_app_.cliapp.md#commands)
* [nodeRuntime](_cli_app_.cliapp.md#noderuntime)
* [options](_cli_app_.cliapp.md#protected-optional-options)

#### Methods

* [command](_cli_app_.cliapp.md#command)

## Constructors

###  constructor

\+ **new CliApp**(`args`: *string[]*, `options?`: *[CliAppConfig](../interfaces/_cli_app_.cliappconfig.md)*): *[CliApp](_cli_app_.cliapp.md)*

*Defined in [cli-app.ts:19](https://github.com/guscrawford-com/cleye/blob/c919695/src/cli-app.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | string[] |
`options?` | [CliAppConfig](../interfaces/_cli_app_.cliappconfig.md) |

**Returns:** *[CliApp](_cli_app_.cliapp.md)*

## Properties

### `Protected` args

• **args**: *string[]*

*Defined in [cli-app.ts:22](https://github.com/guscrawford-com/cleye/blob/c919695/src/cli-app.ts#L22)*

___

###  binRuntime

• **binRuntime**: *string* = ""

*Defined in [cli-app.ts:17](https://github.com/guscrawford-com/cleye/blob/c919695/src/cli-app.ts#L17)*

The path to the JavaScript entry being run by the node runtime

___

###  commands

• **commands**: *object*

*Defined in [cli-app.ts:19](https://github.com/guscrawford-com/cleye/blob/c919695/src/cli-app.ts#L19)*

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticCommand](../interfaces/_models_command_interface_.staticcommand.md)

___

###  nodeRuntime

• **nodeRuntime**: *string* = ""

*Defined in [cli-app.ts:12](https://github.com/guscrawford-com/cleye/blob/c919695/src/cli-app.ts#L12)*

The path to the node.exe runtime executing with these arguments

___

### `Protected` `Optional` options

• **options**? : *[CliAppConfig](../interfaces/_cli_app_.cliappconfig.md)*

*Defined in [cli-app.ts:23](https://github.com/guscrawford-com/cleye/blob/c919695/src/cli-app.ts#L23)*

## Methods

###  command

▸ **command**(`info`: *[StaticCommand](../interfaces/_models_command_interface_.staticcommand.md)*): *[RegisteredCommand](_registered_command_.registeredcommand.md)*

*Defined in [cli-app.ts:35](https://github.com/guscrawford-com/cleye/blob/c919695/src/cli-app.ts#L35)*

Register a command on `this` cli

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [StaticCommand](../interfaces/_models_command_interface_.staticcommand.md) | A `StaticCommand` command defintion  |

**Returns:** *[RegisteredCommand](_registered_command_.registeredcommand.md)*
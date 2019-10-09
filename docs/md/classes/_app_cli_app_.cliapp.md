> **[@guscrawford.com/cleye](../README.md)**

[Globals](../globals.md) / ["app/cli-app"](../modules/_app_cli_app_.md) / [CliApp](_app_cli_app_.cliapp.md) /

# Class: CliApp

## Hierarchy

* **CliApp**

### Index

#### Constructors

* [constructor](_app_cli_app_.cliapp.md#constructor)

#### Properties

* [args](_app_cli_app_.cliapp.md#protected-optional-args)
* [binRuntime](_app_cli_app_.cliapp.md#binruntime)
* [commands](_app_cli_app_.cliapp.md#commands)
* [defaultCommand](_app_cli_app_.cliapp.md#defaultcommand)
* [nodeRuntime](_app_cli_app_.cliapp.md#noderuntime)
* [options](_app_cli_app_.cliapp.md#protected-optional-options)

#### Methods

* [command](_app_cli_app_.cliapp.md#command)

## Constructors

###  constructor

\+ **new CliApp**(`options?`: *[CliAppConfig](../interfaces/_app_cli_app_.cliappconfig.md)*, `args?`: *string[]*): *[CliApp](_app_cli_app_.cliapp.md)*

Defined in app/cli-app.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [CliAppConfig](../interfaces/_app_cli_app_.cliappconfig.md) |
`args?` | string[] |

**Returns:** *[CliApp](_app_cli_app_.cliapp.md)*

## Properties

### `Protected` `Optional` args

• **args**? : *string[]*

Defined in app/cli-app.ts:29

___

###  binRuntime

• **binRuntime**: *string* = ""

Defined in app/cli-app.ts:23

The path to the JavaScript entry being run by the node runtime

___

###  commands

• **commands**: *object*

Defined in app/cli-app.ts:25

#### Type declaration:

● \[▪ **key**: *string*\]: [StaticCommand](../interfaces/_models_command_interface_.staticcommand.md)

___

###  defaultCommand

• **defaultCommand**: *boolean* = false

Defined in app/cli-app.ts:13

___

###  nodeRuntime

• **nodeRuntime**: *string* = ""

Defined in app/cli-app.ts:18

The path to the node.exe runtime executing with these arguments

___

### `Protected` `Optional` options

• **options**? : *[CliAppConfig](../interfaces/_app_cli_app_.cliappconfig.md)*

Defined in app/cli-app.ts:28

## Methods

###  command

▸ **command**(`info`: *[StaticCommand](../interfaces/_models_command_interface_.staticcommand.md)*): *[RegisteredCommand](_command_registered_command_.registeredcommand.md)*

Defined in app/cli-app.ts:51

Register a command on `this` cli

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [StaticCommand](../interfaces/_models_command_interface_.staticcommand.md) | A `StaticCommand` command defintion  |

**Returns:** *[RegisteredCommand](_command_registered_command_.registeredcommand.md)*
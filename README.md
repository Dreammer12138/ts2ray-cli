# ts2ray-cli
ts2ray cli tool

## Install

```shell
$ sudo npm install -g ts2ray ts2ray-cli
# or
$ sudo yarn global add ts2ray ts2ray-cli
```

## How to use

```shell
$ ts2sub -h
Usage: index [options]

Options:
  -v, --version      output the current version
  -u, --url <url>    subscription url
  -n, --name <name>  subscription name
  -l, --list         list all subscription information
  -p, --path <path>  output config in path (default: ".")
  -h, --help         display help for command
```

**Example:**

```shell
$ ts2sub -u <url> -l
* name ip
* name ip
* name ip
```

```shell
$ ts2sub -u <url> -n <name> -p <config path>
```


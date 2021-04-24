#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var ts2ray_1 = require("ts2ray");
var colors = require('colors/safe');
var program = new commander_1.Command();
program.version('0.0.1', '-v, --version', 'output the current version');
program
    .requiredOption('-u, --url <url>', 'subscription url')
    .option('-n, --name <name>', 'subscription name')
    .option('-l, --list', 'list all subscription information')
    .option('-p, --path <path>', 'output config in path', '.');
program.parse(process.argv);
var options = program.opts();
var v = new ts2ray_1.v2sub(options.url);
if (options.list) {
    for (var s in v.subs) {
        console.log('* ' + colors.green(v.subs[s].ps), colors.cyan(v.subs[s].ip));
    }
}
else
    v.toConfig(options.name, '.');

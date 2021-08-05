#!/usr/bin/env node
import { Command } from 'commander';
import { v2sub } from 'ts2ray';
const colors = require('colors/safe');

const program = new Command();
program.version('ts2ray-cli 1.0.9', '-v, --version', 'output the current version');

program
    .requiredOption('-u, --url <url>', 'subscription url')
    .option('-n, --name <name>', 'subscription name')
    .option('-l, --list', 'list all subscription information')
    .option('-p, --path <path>', 'output config in path', '.')

program.parse(process.argv);

const options = program.opts();
let v = new v2sub(options.url);

if (options.list) {
    for (let s in v.subs) {
        console.log('* ' + colors.green(v.subs[s].ps), colors.cyan(v.subs[s].ip));
    }
}
else v.toConfig(options.name, '.');

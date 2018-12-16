#!/usr/bin/env node

const cac = require("cac")
const cli = cac()

const fs = require('fs');

const replace = require('replace-in-file');

const { execSync } = require('child_process');

cli.command("<name>")
  .option('-o, --open', 'Open with vscode')
  .option('-i, --install', 'Install dependencies')
  .action((name, options) => {
    fs.mkdirSync(name)
    fs.copyFileSync(`${__dirname}/template/index.html`, `${name}/index.html`)
    fs.copyFileSync(`${__dirname}/template/index.js`, `${name}/index.js`)
    fs.copyFileSync(`${__dirname}/template/package.json`, `${name}/package.json`)
    fs.copyFileSync(`${__dirname}/template/sketch.js`, `${name}/sketch.js`)

    const replaceOptions = {
      files: [
        `${name}/index.html`,
        `${name}/package.json`
      ],
      from: /{{name}}/g,
      to: name
    };

    try {
      const changes = replace.sync(replaceOptions);
      console.log('Modified files:', changes.join(', '));
    }
    catch (error) {
      console.error('Error occurred:', error);
    }

    if(options.install) {
      execSync('npm i --prefix ' + name)
    }

    if(options.open) {
      execSync('code ' + name)
    }
  })


cli.parse()

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
    const files = fs.readdirSync(`${__dirname}/template/`)
    for(file of files) fs.copyFileSync(`${__dirname}/template/${file}`, `${name}/${file}`)

    const replaceOptions = {
      files: [
        `${name}/index.html`,
        `${name}/package.json`
      ],
      from: /{{name}}/g,
      to: name
    };

    try {
      replace.sync(replaceOptions);
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

    console.log('Project successfully created!')
  })


cli.parse()

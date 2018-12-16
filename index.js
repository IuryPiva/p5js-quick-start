#!/usr/bin/env node

const cac = require("cac")
const cli = cac()

const fs = require('fs');

const replace = require('replace-in-file');

const { execSync } = require('child_process');

cli.command("<name>")
  .action(name => {
    fs.mkdirSync(name)
    fs.copyFileSync(`${__dirname}/template/index.html`, `${name}/index.html`)
    fs.copyFileSync(`${__dirname}/template/index.js`, `${name}/index.js`)
    fs.copyFileSync(`${__dirname}/template/package.json`, `${name}/package.json`)
    fs.copyFileSync(`${__dirname}/template/sketch.js`, `${name}/sketch.js`)

    const options = {
      files: [
        `${name}/index.html`,
        `${name}/package.json`
      ],
      from: /{{name}}/g,
      to: name
    };

    try {
      const changes = replace.sync(options);
      console.log('Modified files:', changes.join(', '));
    }
    catch (error) {
      console.error('Error occurred:', error);
    }

    execSync('code ' + name)
})

cli.parse()

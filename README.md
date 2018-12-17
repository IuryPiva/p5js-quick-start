# P5 - Quick start

**Start developing with p5 in seconds** ✨

Readymade project creator for p5 with parcel bundler.

Happy hacking =)

# Features

* **Parcel** - Preconfigured with [Parcel](https://parceljs.org) for zero config imports and hot reload.
* **TSLint** - Static analysis tool that checks your code for readability, maintainability, and functionality errors.
* **P5 Reference** - Autocomplete and references included.

# Commands
- `p5qs <name>` - Create a project with the specified name
- `p5qs <name> [-i | --install]` - Install dependencies after creating project
- `p5qs <name> [-o | --open]` - Open [Visual Studio Code](https://parceljs.org) after creating project

# Installation
With npm@5.2.0 or later there is no need to install anything, just run `npx p5qs my-p5-project --install --open` to create a project, install dependencies and open it in vscode.

# Usage
Open sketch.js on the project's folder and edit it to test the features

```javascript

// Export the functions that are used by p5
export function setup () {
  createCanvas(windowWidth, windowHeight)
  background(52)
}

export function draw () {
  
}

```

After creating a project, all you need to do is run it with `npm start` to start the server

# License

MIT © Iury Piva
// Force page refresh on hot reload
if (module.hot) module.hot.accept(() => window.location.reload())
// Enable tslint
// @ts-check
// Import p5 references
/// <reference path="global.d.ts" />

// Export the functions that are used by p5
export function setup () {
  createCanvas(windowWidth, windowHeight)
  background(52)
}

export function draw () {
  
}
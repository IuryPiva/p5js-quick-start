// @ts-check
import * as p5 from 'p5'

const sketch = ( /** @type p5 */ p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.background(217)
  }
  
  p.draw = () => {}
}

export default sketch
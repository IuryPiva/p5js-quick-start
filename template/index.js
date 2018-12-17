import p5 from 'p5'

import * as sketch from './sketch'
for(let opt in sketch) {
  window[opt] = sketch[opt]
}

new p5()
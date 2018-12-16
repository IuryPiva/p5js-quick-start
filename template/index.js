import p5 from 'p5';
import sketch from './sketch';


//Force page refresh on hot reload
if (module.hot) {
  module.hot.accept(function () {
      window.location.reload();
  })
}

// Initialize sketch
new p5(sketch);
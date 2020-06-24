const SVG_LIST = [
  'circle',
  'circles',
  'audio',
  'ball-triangle',
  'bars',
  'grid',
  'hearts',
  'oval',
  'puff',
  'rings',
  'spinning-rectangle',
  'spinning-circles',
  'three-dots',
  'chase',
  // 'spinner',
  'bars-smooth',
  'two-cube',
  'fold-cube',
  'fading-circle',
  'cube-fade',
  'timer',
  'location-indicator',
  'raining'
]

import YSvgCircle from './svg/circle.vue'
import YSvgCircles from './svg/circles.vue'
import YSvgAudio from './svg/audio.vue'
import YSvgBallTriangle from './svg/ball-triangle.vue'
import YSvgBars from './svg/bars.vue'
import YSvgGrid from './svg/grid.vue'
import YSvgHearts from './svg/hearts.vue'
import YSvgOval from './svg/oval.vue'
import YSvgPuff from './svg/puff.vue'
import YSvgRings from './svg/rings.vue'
import YSvgSpinningRectangle from './svg/spinning-rectangle.vue'
import YSvgSpinningCircles from './svg/spinning-circles.vue'
import YSvgThreeDots from './svg/three-dots.vue'
import YSvgChase from './svg/chase.vue'
// import YSvgSpinner from './svg/spinner.vue'
import YSvgBarsSmooth from './svg/bars-smooth.vue'
import YSvgTwoCube from './svg/two-cube.vue'
import YSvgFoldCube from './svg/fold-cube.vue'
import YSvgFadingCircle from './svg/fading-circle.vue'
import YSvgCubeFade from './svg/cube-fade.vue'
import YSvgTimer from './svg/timer.vue'
import YSvgLocationIndicator from './svg/location-indicator.vue'
import YSvgRaining from './svg/raining.vue'

export const getComponents = (path) => {

  // let components = {}
  // for (let svg of SVG_LIST) {
  //   components['y-svg-' + svg] = () => import(path + svg + '.vue')
  //   components['y-svg-' + svg] = resolve => {
  //     require([path + svg + '.vue'], resolve);
  //   }
  // }

  return {
    YSvgCircle,
    YSvgCircles,
    YSvgAudio,
    YSvgBallTriangle,
    YSvgBars,
    YSvgGrid,
    YSvgHearts,
    YSvgOval,
    YSvgPuff,
    YSvgRings,
    YSvgSpinningRectangle,
    YSvgSpinningCircles,
    YSvgThreeDots,
    YSvgChase,
    // YSvgSpinner,
    YSvgBarsSmooth,
    YSvgTwoCube,
    YSvgFoldCube,
    YSvgFadingCircle,
    YSvgCubeFade,
    YSvgTimer,
    YSvgLocationIndicator,
    YSvgRaining,
  }
}

export default SVG_LIST
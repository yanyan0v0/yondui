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
  'spinner',
  'bars-smooth',
  'two-cube',
  'fold-cube',
  'fading-circle',
  'cube-fade',
  'timer',
  'location-indicator',
  'raining'
]

export const getComponents = (path) => {
  let components = {}
  for (let svg of SVG_LIST) {
    components['y-svg-' + svg] = () => import(path + svg + '.vue')
  }
  return components
}

export default SVG_LIST
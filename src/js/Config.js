'use strict'

const Config = {
  canvas: null,
  assetPath: './assets/',
  itemDataListPath: './assets/list.json',
  showStats: true,
  debug: {
    displayShadowMap: false,
    orbitControls: false
  },
  scene: {
    bgColor: 0xFFFFFF,
    shadowsOn: false,
    antialias: true,
    showConvexHull: false
  },
  postProcessing: {
    effectDownscaleDivisor: 2
  },
  camera: {
    fov: 45,
    autoMove: true
  }
}

export default Config

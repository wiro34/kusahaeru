'use strict'

KusaHaeru = require './kusaHaeru'
StageManager = require './stageManager'

class K


console.log(K)

class KusaParticle extends createjs.Container
  width: 50
  height: 50

  constructor: () ->
    super()
    @sprout = new lib.sprout()
    console.log(@sprout.getBounds())
    @x = (KusaHaeru.width() - @width * 2) * Math.random() + @width
    @y = (KusaHaeru.height() - @height * 2) * Math.random() + @height
    @addChild(@sprout)
    @scaleX = @scaleY = 0.5 + (Math.random() * 1.0)

class KusaParticleSystem extends createjs.EventDispatcher
  colors: [
    '#006400',
    '#008000',
    '#228b22',
    '#2e8b57',
    '#3cb371',
    '#7cfc00',
    '#32cd32',
  ]

  constructor: (@stage) ->
    super
    @particles = new Array(100)
    @index = 0
    @addEventListener('kusa.update', @update)

  update: =>
    @stage.addChildAt(new KusaParticle(), 1)
    @index++

module.exports = KusaParticleSystem

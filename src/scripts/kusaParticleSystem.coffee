'use strict'

KusaHaeru = require './kusaHaeru'
StageManager = require './stageManager'

class KusaParticle extends createjs.Text
  constructor: (color, toY, duration) ->
    super('w', '20px Arial', color)
    @scaleX = @scaleY = 2 * (Math.random() + .5)
    @x = KusaHaeru.width() * Math.random()
    @y = 0
    @textBaseline = 'alphabetic'
    createjs.Tween.get(@).to({y: toY}, duration)

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
    particle = new KusaParticle(
      @colors[Math.floor(Math.random() * @colors.length)],
      500 - @index * 1.5,
      Math.max(2000 - @index * 4, 100)
    )
    @stage.addChildAt(particle, 1)
    @index++

module.exports = KusaParticleSystem

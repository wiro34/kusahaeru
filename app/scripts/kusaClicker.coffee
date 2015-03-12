'use strict'

KusaHaeru = require './kusaHaeru'
StageManager = require './stageManager'

class KusaClicker extends createjs.Shape
  radius: 100

  constructor: ->
    super
    @x = KusaHaeru.width() / 2
    @y = KusaHaeru.height() / 2
    @graphics.beginFill('#00bfff').drawCircle(0, 0, @radius).endFill()
    @addEventListener('click', @handleClick)

  handleClick: ->
    StageManager.countup(1)

module.exports = KusaClicker





'use strict'

KusaHaeru = require './kusaHaeru'
StageManager = require './stageManager'

class KusaCounter extends createjs.Text
  constructor: ->
    super('0 waros', '20px Arial', '#ff7700')
    @x = (KusaHaeru.width() - 100) / 2
    @y = 30
    @textBaseline = 'alphabetic'
    @addEventListener('kusa.update', @update)

  update: =>
    @text = "#{StageManager.kusaCount} waros"

module.exports = KusaCounter





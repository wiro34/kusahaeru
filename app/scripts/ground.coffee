'use strict'

KusaHaeru = require './kusaHaeru'

class Ground extends createjs.Shape
  constructor: ->
    super
    g = @graphics
    g.beginFill('#f5deb3').drawRect(0, 0, KusaHaeru.width(), KusaHaeru.height())

module.exports = Ground

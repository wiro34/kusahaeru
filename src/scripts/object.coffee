'use strict'

StageManager = require './stageManager'

class Object
  constructor: (@shape) ->

  stage: ->
    StageManager.stage

  toShape: ->
    @shape

  dispatchEvent: (e) ->
    @shape.dispatchEvent(e)


module.exports = Object

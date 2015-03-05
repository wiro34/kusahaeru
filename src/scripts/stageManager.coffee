'use strict'

class StageManager
  constructor: ->
    @stage = new createjs.Stage('canvas')
    @kusaCount = 0

  start: ->
    createjs.Ticker.setFPS(60)
    createjs.Ticker.addEventListener('tick', @tickHandler)
    @stage.update()

    Ground = require './ground'
    KusaCounter = require './kusaCounter'
    KusaClicker = require './kusaClicker'
    KusaParticleSystem = require './kusaParticleSystem'

    @stage.addChild(new Ground())
    @stage.addChild(new KusaClicker())
    @stage.addChild(@counter = new KusaCounter())
    @particleSystem = new KusaParticleSystem(@stage)

  countup: (increment) ->
    @kusaCount = @kusaCount + increment
    @counter.dispatchEvent('kusa.update')
    @particleSystem.dispatchEvent('kusa.update')

  tickHandler: =>
    @stage.update()

module.exports = new StageManager

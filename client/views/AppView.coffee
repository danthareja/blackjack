class window.AppView extends Backbone.View

  className: 'container'

  template: _.template '
    <div class="dealer-hand-container"></div>
    <div class="player-hand-container"></div>
    <button class="hit-button">Hit</button> <button class="stand-button">Stand</button>
  '

  events:
    "click .hit-button": -> @model.get('playerHand').hit()
    "click .stand-button": -> @model.get('playerHand').stand()

  initialize: ->
    @render()
    $(".blink_me").hide()

  render: ->
    @$el.children().detach()
    @$el.html @template()
    @$('.dealer-hand-container').html new HandView(collection: @model.get 'dealerHand').el
    @$('.player-hand-container').html new HandView(collection: @model.get 'playerHand').el

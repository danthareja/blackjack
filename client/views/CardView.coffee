class window.CardView extends Backbone.View

  tagName: 'img'
  className: 'card'

  initialize: ->
    @model.on 'change', => @render
    @render()

  render: ->
    @$el.children().detach().end().html
    @$el.attr('src', @model.get 'url') unless not @model.get 'revealed'
    @$el.addClass 'covered' unless @model.get 'revealed'

// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.App = (function(_super) {
    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var deck;
      this.set('deck', deck = new Deck());
      this.set('playerHand', deck.dealPlayer());
      this.set('dealerHand', deck.dealDealer());
      this.set('winner', void 0);
      this.on;
      this.get('playerHand').on('turnEnded', (function(_this) {
        return function() {
          if ((_this.get('playerHand')).isBusted()) {
            return _this.set('winner', 'dealer');
          } else {
            return (_this.get('dealerHand')).playHand();
          }
        };
      })(this));
      this.get('dealerHand').on('turnEnded', (function(_this) {
        return function() {
          console.log('dealer ends');
          if ((_this.get('dealerHand')).isBusted()) {
            return _this.set('winner', 'player');
          } else {
            return _this.compareScores();
          }
        };
      })(this));
      return this.on('change:winner', (function(_this) {
        return function() {
          return alert("The winner is: " + (_this.get('winner')) + " !!!!");
        };
      })(this));
    };

    App.prototype.compareScores = function() {
      if ((this.get('playerHand')).handScore() > (this.get('dealerHand')).handScore()) {
        return this.set('winner', 'player');
      } else {
        return this.set('winner', 'dealer');
      }
    };

    return App;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=App.map

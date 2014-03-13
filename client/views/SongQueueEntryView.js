// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button class="play">play</button><button class="dequeue">dequeue</button></td>'),


  events: {
    'click .play': function() {
      this.model.play();
    },
    'click .dequeue': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

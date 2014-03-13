// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('change', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    this.trigger('playFirst');
  }

});

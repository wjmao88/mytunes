describe('PlayerView', function() {
  var library, appView;

  beforeEach(function() {

    library = new Songs([
      {
        url: "mp3s/08 4 Page Letter.mp3",
        title: "4 Page Letter",
        artist: "Aaliyah"
      },
      {
        url: "mp3s/11 We Need A Resolution.mp3",
        title: "We Need A Resolution",
        artist: "Aaliyah"
      }
    ]);
    // playerView is created in AppView initialize
    // access with appView.playerView
    appView = new AppView({model: new AppModel({library: library})});
  });

  it('gets its model property set to any song that is played', function(){
    expect(appView.playerView.model).to.not.equal(library.at(0));
    library.at(0).play();
    expect(appView.playerView.model).to.equal(library.at(0));
  });

  describe('Song transitions', function() {
    it('dequeues a song when finished playing & plays the next song', function(){
      library.at(0).play();
      var originalSong = appView.playerView.model;
      console.log(originalSong);
      appView.model.get('songQueue').add(library.at(1));
      console.log(appView.model.get('songQueue'));
      // Simulate a song end event being triggered
      $(appView.playerView.el).trigger('ended');
      console.log(appView.model.get('songQueue'));
      console.log(appView.playerView.model);
      expect(appView.playerView.model).to.not.equal(originalSong);
    });
  });

});

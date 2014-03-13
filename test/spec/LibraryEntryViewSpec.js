describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    sinon.spy(SongModel.prototype, 'enqueue');
    sinon.spy(SongModel.prototype, 'play');
    view = new LibraryEntryView({model: model});
    view.render();
  });

  afterEach(function() {
    SongModel.prototype.enqueue.restore();
    SongModel.prototype.play.restore();
  });

  it('plays clicked songs', function(){
    view.$el.children().find('.play').click();
    expect(model.play).to.have.been.called;
  });

  // Comment out the above spec when implementing the below
  it('queues clicked songs', function(){
    view.$el.children().find('.enqueue').click();
    expect(model.enqueue).to.have.been.called;
  });

});

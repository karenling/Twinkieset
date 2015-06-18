TwinkieSetApp.Views.AlbumsShowSidebar = Backbone.CompositeView.extend({
  template: JST['albums/show_sidebar'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.subalbums(), "add", this.addSubAlbumView);
    this.model.subalbums().each(this.addSubAlbumView.bind(this));
    this.listenTo(this.model.subalbums(), 'remove', this.removeSubAlbumView)
  },

  events: {
    'click .new-set-button': 'openSubalbumForm',
    'sortstop': "saveOrdsSubalbums",
    'updateSort': "updateSortSubalbums",
    'click .edit-album-button': 'openEditForm'
  },

  openEditForm: function (event) {
    var subalbumForm = new TwinkieSetApp.Views.EditForm({
      model: this.model
    });
    $('body').append(subalbumForm.render().$el);
  },

  updateSortSubalbums: function (event, droppedModel, position) {
    this.model.subalbums().remove(droppedModel, { silent: true});
    this.model.subalbums().each(function (model, idx) {
      var ordinal = idx;
      if (idx >= position) {
        ordinal += 1;
      }
      model.set('order', ordinal);
      model.save();
    });

    droppedModel.set('order', position);
    droppedModel.save();
    this.model.subalbums().add(droppedModel, { silent: true });
    this.model.subalbums().sort();

  },

  saveOrdsSubalbums: function (event, ui) {
    ui.item.trigger('dropSubalbum', ui.item.index()); // ui.item finds its own view
  },

  openSubalbumForm: function () {
    var subalbumForm = new TwinkieSetApp.Views.SubalbumForm({
      header: "New Photo Set",
      album: this.model,
      subalbum: new TwinkieSetApp.Models.Subalbum()
    });
    $('body').append(subalbumForm.render().$el);
  },

  removeSubAlbumView: function (subalbum) {
    this.removeModelSubview('.album-show-subalbums', subalbum);
  },

  addSubAlbumView: function (subalbum) {
    var subview = new TwinkieSetApp.Views.AlbumsShowSubalbumItem({
      model: subalbum,
      album: this.model
    });
    this.addSubview('.album-show-subalbums', subview);
  },

  render: function () {
    var content = this.template({ album: this.model });
    this.$el.html(content);
    this.attachSubviews();



    var cover_image = this.model.get('cover_image_med');

    if (cover_image) {
      this.$el.find('.collection-cover-image').css('background-image', 'url('+cover_image+')');
    }

    this.onRender();
    return this;
  },

  onRender: function(){
    $('.album-show-subalbums').sortable();
  },

});

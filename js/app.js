App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('contact');
  this.resource('projects');
});

App.Router.reopen({
  location: 'auto'
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

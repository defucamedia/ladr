import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LadrENV.locationType
});

Router.map(function() {
	this.resource('about');
    this.resource('contact');
    this.resource('projects');
    this.resource('project', { path: "/projects/:id" });
});

export default Router;

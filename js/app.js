App = Ember.Application.create();

/// Routing
App.Router.map(function() {
    this.resource('about');
    this.resource('contact');
    this.resource('projects', function() {
        this.resource('project', { path: ":id" });
    });
});

App.ProjectsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find("project");
    }
});

App.AboutRoute = Ember.Route.extend({
    model: function() {
        return this.store.find("award");
    }
});

// App.ProjectRoute = Ember.Route.extend({
//     model: function(params) {
//         return this.store.find("project", params.id)
//     }
// });

App.Router.reopen({
    location: 'auto'
});

/// Controllers
App.ProjectsController = Ember.ArrayController.extend({
    queryParams: ["category"],
    category: "",
    categories: function() {
        return this.map(function(p) {
            return p.get("categories");
        }).reduce(function(c1, c2) {
            return c1.concat(c2);
        }).uniq();
    }.property("@each.categories"),

    filteredProjects: function() {
        var category = this.get("category");
        var projects = this.get("model");

        if (!category)
            return projects;
        
        return projects.filter(function(project) {
            return project.get("categories").indexOf(category) != -1;
        });
    }.property("category", "model")
});

/// Models
App.Project = DS.Model.extend({
    name: DS.attr(),
    city: DS.attr(),
    province: DS.attr(),
    categories: DS.attr(),
    features: DS.attr(),
    thumbnail: DS.attr(),
    images: DS.attr()
});

App.Award = DS.Model.extend({
    desc: DS.attr(),
    year: DS.attr()
})

/// Data
App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.Project.FIXTURES = [
    { id: "project-1", name: "Project 1", city: "city1", province: "province1", categories: ["category1"],              features: ["award1"],   thumbnail: "",
        images: [""] },
    { id: "project-2", name: "Project 2", city: "city2", province: "province2", categories: ["category1", "category2"], features: [],           thumbnail: "",
        images: [""] },
];

App.Award.FIXTURES = [
    { id: 1, year: 2012, desc: "Award1" },
    { id: 2, year: 2013, desc: "Award2" }
];
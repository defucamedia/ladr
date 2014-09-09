App = Ember.Application.create();
App.AnimatedRoute = Ember.Route.extend({
    hasTransitionedOnce: false,
    _transitioning: false,
    willEnter: function() {
        return $('#outlet, footer').fadeIn().promise();
    },
    willExit: function() {
        return $('#outlet, footer').fadeOut().promise();
    },

    deactivate: function() { this._transitioning = false; this.hasTransitionedOnce = true; },
    afterModel: function(model, transition) {
        var route = this
        transition.then(function() {
            new Ember.RSVP.Promise(function(resolve, _) {
                Ember.run.next(this, function() {
                    route.willEnter().then(resolve);
                });
            });
        });

        this._super.apply(this, arguments);
    },

    actions: {
        willTransition: function(transition) {
            var routeNames = transition.handlerInfos.map(function(o) {
               return o.name;
            });
            var isParent = routeNames.indexOf(this.routeName) > -1;
            if (isParent) { return true; }
            if (this._transitioning) { return true; }

            this._transitioning = true;
            transition.abort();
            this.willExit().then(function() { transition.retry(); });
        }
    }
});

/// Routing
App.Router.map(function() {
    this.resource('about');
    this.resource('contact');
    this.resource('projects', function() {
        this.resource('project', { path: ":slug" });
    });
});

App.IndexRoute = App.AnimatedRoute.extend(App.HistoryMixin);
App.ContactRoute = App.AnimatedRoute.extend(App.HistoryMixin);

App.ProjectsRoute = App.AnimatedRoute.extend({
    model: function() {
        return this.store.find("project");
    },
    actions: {
        willTransition: function() {
            this.controllerFor("project").set("animateModal", true);
            return true;
        },
    }
});

App.AboutRoute = App.AnimatedRoute.extend({
    model: function() {
        return Ember.RSVP.hash({
            awards: this.store.find("award"),
            team: this.store.find("person")
        });
    },
    renderTemplate: function(c, m) {
        this.render();
        this.render("awards", {
            into: "about",
            outlet: "awards",
            controller: "award",
            model: m.awards
        });
        this.render("team", {
            into: "about",
            outlet: "team",
            model: m.team
        });
    }
});

App.ProjectRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find("project", params.slug)
    },
    renderTemplate: function(c, m) {
        this.render("project", {
            into: "application",
            outlet: "modal"
        });
    },
    actions: {
        closeProject: function(redirect) {
            if (!this.controller.get("animateModal"))
                this.transitionTo("projects");
            else
                window.history.back();
        }
    }
});

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

App.ProjectController = Ember.Controller.extend({
    animateModal: false,
    actions: {
        close: function() {
            return this.send("closeProject", this.get("animateModal"));
        }
    }
});

App.AwardController = Ember.ArrayController.extend({
    sortProperties: ["year"],
    sortAscending: false
});

/// Components
App.ModalDialogComponent = Ember.Component.extend({
    actions: {
        close: function() {
            return this.sendAction();
        }
    }
});

/// Models
App.Project = DS.Model.extend({
    slug: DS.attr(),
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
});

App.Person = DS.Model.extend({
    name: DS.attr(),
    avatar: DS.attr(),
    certs: DS.attr(),
    title: DS.attr(),
    desc: DS.attr()
})

/// Data
App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.Project.FIXTURES = [
    { id: 1, slug: "project-1", name: "Project 1", city: "city1", province: "province1", categories: ["category1"],              features: ["award1"],   thumbnail: "",
        images: [""] },
    { id: 2, slug: "project-2", name: "Project 2", city: "city2", province: "province2", categories: ["category1", "category2"], features: [],           thumbnail: "",
        images: [""] },
];

App.Award.FIXTURES = [
    { id: 1, year: 2012, desc: "Award1" },
    { id: 2, year: 2013, desc: "Award2" },
    { id: 3, year: 2011, desc: "Award3" }
];

App.Person.FIXTURES = [
    { id: 1, name: "person1", avatar: "", title: "title1", certs: "certs1", desc: "description1" },
    { id: 2, name: "person2", avatar: "", title: "title2", certs: "certs2", desc: "description2" }
];



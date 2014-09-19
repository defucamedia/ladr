import Ember from "ember";

export default Ember.Route.extend({
    hasTransitionedOnce: false,
    _transitioning: false,
    willEnter: function() {
        return Ember.$('#outlet, footer').fadeIn().promise();
    },
    willExit: function() {
        return Ember.$('#outlet, footer').fadeOut().promise();
    },

    deactivate: function() { this._transitioning = false; this.hasTransitionedOnce = true; },
    afterModel: function(model, transition) {
        var route = this;
        transition.then(function() {
            new Ember.RSVP.Promise(function(resolve) {
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
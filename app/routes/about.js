import Ember from "ember";
import AnimatedRoute from "./animated-route";

export default AnimatedRoute.extend({
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
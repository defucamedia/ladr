import AnimatedRoute from "./animated-route";

export default AnimatedRoute.extend({
    model: function() {
        return this.store.find("project");
    }
});
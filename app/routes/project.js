import AnimatedRoute from "./animated-route";

export default AnimatedRoute.extend({
    model: function(params) {
        return this.store.find("project", params.id);
    }
});
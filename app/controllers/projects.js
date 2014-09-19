import Ember from "ember";

export default Ember.ArrayController.extend({
    queryParams: ["category"],
    sortProperties: ["sortOrder"],
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
        var projects = this.get("arrangedContent");

        if (!category) {
            return projects;
        }
        
        return projects.filter(function(project) {
            return project.get("categories").indexOf(category) !== -1;
        });
    }.property("category", "arrangedContent")
});
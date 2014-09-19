import DS from "ember-data";

var model = DS.Model.extend({
    slug: DS.attr(),
    name: DS.attr(),
    city: DS.attr(),
    province: DS.attr(),
    categories: DS.attr(),
    features: DS.attr(),
    thumbnail: DS.attr(),
    images: DS.attr()
});

model.reopenClass({
    FIXTURES: [
        { id: "project-1", name: "Project 1", sortOrder: 2, city: "city1", province: "province1", categories: ["category1"],              features: ["award1"],   thumbnail: "",
            images: [""] },
        { id: "project-2", name: "Project 2", sortOrder: 1, city: "city2", province: "province2", categories: ["category1", "category2"], features: [],           thumbnail: "",
            images: [""] },
    ]
});

export default model;
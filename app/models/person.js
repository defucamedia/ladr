import DS from "ember-data";

var model = DS.Model.extend({
    name: DS.attr(),
    avatar: DS.attr(),
    certs: DS.attr(),
    title: DS.attr(),
    desc: DS.attr()
});

model.reopenClass({
    FIXTURES: [
        { id: 1, name: "person1", avatar: "", title: "title1", certs: "certs1", desc: "description1" },
        { id: 2, name: "person2", avatar: "", title: "title2", certs: "certs2", desc: "description2" }
    ]
});

export default model;
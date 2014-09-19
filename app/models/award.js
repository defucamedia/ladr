import DS from "ember-data";

var model = DS.Model.extend({
    desc: DS.attr(),
    year: DS.attr()
});

model.reopenClass({
    FIXTURES: [
        { id: 1, year: 2012, desc: "Award1" },
        { id: 2, year: 2013, desc: "Award2" },
        { id: 3, year: 2011, desc: "Award3" }
    ]
});

export default model;
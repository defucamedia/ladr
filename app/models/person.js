import DS from "ember-data";

var model = DS.Model.extend({
    name: DS.attr(),
    avatar: DS.attr(),
    certs: DS.attr(),
    title: DS.attr(),
    desc: DS.attr(),
    email: DS.attr()
});

model.reopenClass({
    FIXTURES: [
        { id: 1, name: "Bev Windjack",    email: "bwindjack@ladrla.ca", title: "Principal",      certs: "BCSLA CSLA ASLA LEED AP BD+C", avatar: "/assets/images/personnel/bev.jpg",    desc: "Bev has 30 years experience in private sector landscape architecture, and has practiced in Canada and abroad. She has an established reputation for design excellence, facilitation, and masterplanning. Bev received her Master of Landscape Architecture and Bachelor of Environmental Studies degrees from the University of Manitoba, and is completing her Native Species and Natural Processes Certificate at the University of Victoria. Bev is currently a member of the City of Victoria Advisory Design Panel." },
        { id: 2, name: "Julie Lommerse",  email: "jlommerse@ladrla.ca", title: "Associate",      certs: "BCSLA CSLA LEED Green Assoc.", avatar: "/assets/images/personnel/julie.jpg",  desc: "Julie has a passion for design and nearly 24 years of combined experience in private/public sector landscape architecture, including 19 years in corporate and public sector recreation planning and management. Prior to joining LADR, she worked for the District of Saanich, the City of Burnaby, the City of Toronto, and the City of Perth (Western Australia). Julie received her Master of Landscape Architecture from the University of British Columbia and her Bachelor of Arts in Recreation Administration from the University of Alberta." },
        { id: 3, name: "Chris Windjack",  email: "cwindjack@ladrla.ca", title: "Technician",     certs: "",                             avatar: "/assets/images/personnel/chris.jpg",  desc: "Chris is a student in the University of British Columbia's Landscape Architecture Program, and works with LADR on a part time basis. Before returning for his Master's degree, Chris worked as a technician with LADR for 5 years. Chris received his Bachelor of Arts (Greek and Roman Studies) from the University of Victoria." },
        { id: 4, name: "Nicola Windjack", email: "nwindjack@ladrla.ca", title: "Administration", certs: "B.A.",                         avatar: "/assets/images/personnel/nicola.jpg", desc: "Our \"go to\" person, Nicola has a strong interest in small business and manages the day-to-day financial and administrative aspects of the office. She received her Bachelor of Arts from the University of Victoria." },
        { id: 5, name: "Maddi and Rosie", email: "",                    title: "",               certs: "",                             avatar: "/assets/images/personnel/dogs.jpg",   desc: "Arguably the most popular members of our team, Maddi the Border Collie and Rosie the Old English Bulldog enjoy greeting the couriers and eating the recycling." },
    ]
});

export default model;
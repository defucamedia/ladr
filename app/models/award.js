import DS from "ember-data";

var model = DS.Model.extend({
    desc: DS.attr(),
    year: DS.attr()
});

model.reopenClass({
    FIXTURES: [
        { id: 1,  year: 2012, desc: "National SAM Award for Whole House Renovation under $500.000 and Silver CARE Award for Best Outdoor Living Space under $50,000:\"Redux\" Residence, Victoria BC" },
        { id: 2,  year: 2011, desc: "Gold CARE Award for Best Outdoor Living Space under $50,000 and Georgie Award Finalist for Best Outdoor Living Space: Eden Residence, Victoria, BC" },
        { id: 3,  year: 2010, desc: "Victoria Real Estate Award of Excellence: The Raven Office Building, Saanich, BC" },
        { id: 4,  year: 2010, desc: "Victoria Real Estate Award of Excellence: Bethel Senior's Centre, Sidney, BC" },
        { id: 5,  year: 2009, desc: "Gold CARE Award for Subdivision Excellence and Silver CARE Award for Outdoor Environmental Achievement: Oceanwood Estates, Saanich BC" },
        { id: 6,  year: 2009, desc: "Gold CARE Award for Excellence in Multi-Family Housing: The Promenade, Saanich, BC" },
        { id: 7,  year: 2009, desc: "Wood Design Award BC (Residential): Richmond Gate, Saanich, BC" },
        { id: 8,  year: 2008, desc: "Victoria Real Estate Award of Excellence: Redstone Heritage Restoration, Victoria BC" },
        { id: 9,  year: 2008, desc: "Victoria Real Estate Award of Excellence: The Vicino Mixed Use Development, Victoria BC" },
        { id: 10, year: 2007, desc: "Beacon Park Pavilion Design Competition (Sidney, BC) finalist" },
        { id: 11, year: 2006, desc: "Silver CARE Award: South Valley Estates, Saanich BC 2006 BCLNA Environmental Stewardship Award (second place): South Valley Estates, Saanich BC" },
        { id: 12, year: 2006, desc: "Victoria Real Estate Award of Excellence: The Vogue, Victoria BC" },
        { id: 13, year: 2002, desc: "Gold CARE Award: Admiral's Landing, View Royal, BC" },
        { id: 14, year: 2002, desc: "Provincial Capital Commission Greenways Award of Merit: West Side Rail Project, Greater Victoria, BC" },
        { id: 15, year: 1998, desc: "Silver CARE, 1997 Grand CARE and 1996 Gold CARE Awards: Aldersmith Woods, View Royal, BC" }
    ]
});

export default model;
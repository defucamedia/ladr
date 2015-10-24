import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Profile {
    heading = 'Distinct. Engaging. Sustainable.';
    testimonials = [];

    constructor(http){
        http.configure(config => {
            config.useStandardConfiguration();
        });

        this.http = http;
    }

    attached() {
        jQuery(this.carousel).carousel();
    }

    activate(){
        return this.http.fetch('data/testimonials.json')
            .then(response => response.json())
            .then(testimonials => this.testimonials = testimonials.shuffle().slice(0, 5));
    }
}

Array.prototype.shuffle = function() {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }

    return this;
}

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class About {
    heading = 'The people behind it all.';
    people = [];

    constructor(http){
        http.configure(config => {
            config.useStandardConfiguration();
        });

        this.http = http;
    }

    activate(){
        return this.http.fetch('data/people.json')
            .then(response => response.json())
            .then(people => this.people = people);
    }
}

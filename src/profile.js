import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Profile {
  heading = 'Distinct. Engaging. Sustainable.';
  testimonials = [];

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration();
    });

    this.http = http;
  }

  activate(){
    return this.http.fetch('data/testimonials.json')
      .then(response => response.json())
      .then(testimonials => this.testimonials = testimonials);
  }
}

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Contact {
    name = 'asdf';
    email = '';
    message = '';
    canSubmit = true;

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration();
    });

    this.http = http;
  }

  submit() {
      var self = this;
      this.canSubmit = false;
      var formData = new FormData();
      formData.append('subject', 'Contact Form');
      formData.append('recipients', "test@ladrla.ca");
      formData.append('realname', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);

      setTimeout(function() {
          self.canSubmit = true;
      }, 1000);

    //   this.http
    //       .post("formmail.php", formData)
    //       .then(function() {
    //           this.canSubmit = true;
    //           this.name = '';
    //           this.email = '';
    //           this.message = '';
    //       })

  }
}

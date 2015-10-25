import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Contact {
    heading = 'Speak to us.';
    name = '';
    email = '';
    message = '';
    canSubmit = true;
    submitted = false;
    result = { status: "success", message: "" };

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
      formData.append('recipients', "misc@cyxmusic.com");
      formData.append('realname', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);

    //   setTimeout(function() {
    //       self.submitted = true;
    //       self.result.status = "success";
    //       self.result.message = "Your message has been sent.";
    //       setTimeout(() => {
    //           self.submitted = false;
    //           self.canSubmit = true;
    //           self.result.message = "";
    //       }, 2000);
    //   }, 1000);

      this.http
          .post("formmail.php", formData)
          .then(() => {
              self.submitted = true;
              self.result.status = "success";
              self.result.message = "Your message has been sent.";
              setTimeout(() => {
                  self.submitted = false;
                  self.canSubmit = true;
                  self.result.message = "";
                  self.name = '';
                  self.email = '';
                  self.message = '';
              }, 2000);
          });
  }
}

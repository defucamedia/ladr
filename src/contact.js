import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Contact {
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
      formData.append('recipients', "test@ladrla.ca");
      formData.append('realname', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);

      setTimeout(function() {
          self.submitted = true;
          self.result.status = "success";
          self.result.message = "We have recieved your message.";
          setTimeout(() => {
              self.submitted = false;
              self.canSubmit = true;
              self.result.message = "";
          }, 2000);
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

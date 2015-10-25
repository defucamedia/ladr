import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
//import 'fetch';

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

      this.http
          .post("formmail.php", formData)
          .then(() => {
              self.submitted = true;
              self.result.status = "success";
              self.result.message = "Your message has been sent.";
              setTimeout(() => {
                  self.resetForm();
              }, 2000);
          })
          .catch(e => {
              self.submitted = true;
              self.result.status = "danger";
              self.result.message = "Your message was not sent.";
              setTimeout(() => {
                  self.resetForm();
              }, 2000);
          });
  }

  resetForm() {
      this.submitted = false;
      this.canSubmit = true;
      this.result.message = "";
      this.name = '';
      this.email = '';
      this.message = '';
  }
}

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
      this.canSubmit = false;
      var formData = new FormData();
      formData.append('realname', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);
      formData.append('fmmode', 'ajax');

      this.http
          .post("formmail.php", formData)
          .then((response) => {
              if (response.ErrorCode) {
                  this.handleEmail("danger", "Your message was not sent.");
              } else {
                  this.handleEmail("success", "Your message has been sent.");
              }
          })
          .catch(e => {
              this.handleEmail("danger", "Your message was not sent.");
          });
  }

  handleEmail(status, message) {
      this.submitted = true;
      this.result.status = status;
      this.result.message = message;
      var self = this;
      setTimeout(() => {
          self.resetForm();
      }, 2000);
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

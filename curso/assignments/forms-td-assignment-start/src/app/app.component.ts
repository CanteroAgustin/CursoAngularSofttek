import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  subscription = "Advanced";
  submitted = false;
  mail = '';
  pass = '';
  subs = '';

  onSubmit(form: NgForm){
    this.submitted = true;
    this.mail = form.value.email.toString();
    this.pass = form.value.password;
    this.subs= form.value.subscription;
    console.log("Email: "+this.mail);
    console.log("Password: "+this.pass);
    console.log("Subscription: "+this.subs);
    form.reset();
  }
}

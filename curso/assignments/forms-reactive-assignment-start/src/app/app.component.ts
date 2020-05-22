import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  forbiddenNames = 'Test';

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      //'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      'projectName': new FormControl(null, Validators.required, this.forbiddenProjectNameAsinc),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl()
    });
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { 'nameIsForbidden': true }
    }
    return null;
  }

  forbiddenProjectNameAsinc(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'nameIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}

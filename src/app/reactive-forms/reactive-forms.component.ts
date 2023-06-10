import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    contact: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl(null, Validators.required)
    }),
    // email: new FormControl('', [Validators.required, Validators.email]),
    secret: new FormControl('pet', Validators.required)
  });

  constructor() {}

  ngOnInit(): void {

    // this.formGroup = new FormGroup({
    //   userName: new FormControl('', [Validators.required]),
    //   email: new FormGroup('', [Validators.required, Validators.email]),
    //   secret: new FormControl('male', Validators.required)
    // })
  }

  onSubmit() {
    console.log(this.formGroup)
  }
}

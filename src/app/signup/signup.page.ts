import * as citiesList from './../../pk.json';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  cities = [];
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formInitializer();
    this.cities = citiesList['default'];
    this.cities.sort((a, b) => a.city.localeCompare(b.city));
  }

  formInitializer() {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]],
      gender: ['m', [Validators.required]],
      city: [null, [Validators.required]]
    });
  }
}

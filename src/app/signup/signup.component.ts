import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupFormValues: any;
  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formbuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createFormControls();
  }

  createForm(){
    this.signupForm = this.formbuilder.group(this.signupFormValues)
  };



  createFormControls() {
    this.signupFormValues = {
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      nickname: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    };
  }


  signup() {
    const form = this.signupForm.value;
    const params = {email: form.email, first_name: form.first_name, last_name: form.last_name, nickname: form.nickname, password: form.password, password_confirmation: form.password_confirmation}
  }
// working on sign up method here. Need click listener on signup button



}

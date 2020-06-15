import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@app/store/app-store.module';
import { Store } from '@ngrx/store';
import { validateWhitespace } from '@app/utilities/utilities';
import { LoginUser, RegisterUser } from '@app/store/actions/auth.action';
import { AuthDTO } from '@app/models/auth';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm:FormGroup;
  constructor(private fb :FormBuilder, private store:Store<AppState>) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: this.fb.control('', [Validators.required,validateWhitespace]),
      password: this.fb.control('', [Validators.required,validateWhitespace])
    })
  }

  login(){
    const val = this.authForm.getRawValue() as AuthDTO;
    return this.store.dispatch(new LoginUser(val))
  }

  register(){
    const val = this.authForm.getRawValue() as AuthDTO;
    return this.store.dispatch(new RegisterUser(val))
  }

}

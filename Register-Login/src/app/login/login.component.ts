import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) {}

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }


  loginUser() {
    const { email, password } = this.loginForm.value;
    this._authService.getUserByEmail(email as string).subscribe(
      response => {
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          this.msgService.add({ severity: 'success', summary: 'success', detail: 'You are login successfully' });
          this.router.navigate(['/home']);
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
        }
      },
      error => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }

    )
  }

}
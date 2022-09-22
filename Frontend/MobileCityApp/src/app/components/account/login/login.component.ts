import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    email: '',
    password: ''
  };

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try {
      const result = await this.accountService.login(this.login);
      this.accountService.showMessage('You are Logged!')
      console.log(`Login efetuado: ${result}`);
      this.router.navigate(['']);
    } catch (error){
      this.accountService.showMessage('Invalid credentials!')
      console.log(error);
    }
  }

  navigateToAccountCreate(): void {
    this.router.navigate(['/create-account'])
  }

}

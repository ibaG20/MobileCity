import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { Account } from './account.model';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account = {} as Account
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try {
      const result = await this.accountService.createAccount(this.account);
      console.log(`Account created! ${result}`);
      this.router.navigate(['']);
    } catch (error){
      console.log(error);
    }
  }
}

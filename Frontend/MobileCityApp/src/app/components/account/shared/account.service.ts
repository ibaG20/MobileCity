import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const apiUrl = 'http://localhost:3333/users';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  async login(user: any){
    const result = await this.http.post<any>(`${apiUrl}/login`, user).toPromise();
    if(result && result.token){
      window.localStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(apiUrl, account).toPromise();
    return result;
  }

  getAuthToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  isUserLoggedIn(){
    const token = this.getAuthToken();
    if(token){
      return true;
    }
    return false;
  }

  logout(){
    window.localStorage.removeItem('token');
  }
}

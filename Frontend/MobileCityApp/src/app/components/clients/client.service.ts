import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Client } from './client.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = 'http://localhost:3333/clients';
//const apiUrl = 'http://localhost:3000/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(apiUrl, client);
  }

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(apiUrl)
  }

  readById(id: string): Observable<Client>{
    const url = `${apiUrl}/${id}`
    return this.http.get<Client>(url)
  }

  update(client: Client): Observable<Client>{
    const url = `${apiUrl}/${client.id}`
    return this.http.put<Client>(url, client)
  }

  delete(id: string): Observable<Client>{
    const url = `${apiUrl}/${id}`
    return this.http.delete<Client>(url)
  }
}

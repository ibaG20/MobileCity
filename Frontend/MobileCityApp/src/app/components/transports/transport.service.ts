import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Transport } from './transport.model';

const apiUrl = 'http://localhost:3333/transports';
//const apiUrl = 'http://localhost:3000/transports';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(transport: Transport): Observable<Transport> {
    return this.http.post<Transport>(apiUrl, transport);
  }

  read(): Observable<Transport[]> {
    return this.http.get<Transport[]>(apiUrl)
  }

  readById(id: string): Observable<Transport>{
    const url = `${apiUrl}/${id}`
    return this.http.get<Transport>(url)
  }

  update(transport: Transport): Observable<Transport>{
    const url = `${apiUrl}/${transport.id}`
    return this.http.put<Transport>(url, transport)
  }

  delete(id: string): Observable<Transport>{
    const url = `${apiUrl}/${id}`
    return this.http.delete<Transport>(url)
  }
}

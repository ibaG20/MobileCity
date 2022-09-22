import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Rent } from './rent.model';

const apiUrl = 'http://localhost:3333/rents';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(rent: Rent): Observable<Rent> {
    return this.http.post<Rent>(apiUrl, rent);
  }

  read(): Observable<Rent[]> {
    return this.http.get<Rent[]>(apiUrl)
  }

  readById(id: string): Observable<Rent>{
    const url = `${apiUrl}/${id}`
    return this.http.get<Rent>(url)
  }

  update(rent: Rent): Observable<Rent>{
    const url = `${apiUrl}/${rent.id}`
    return this.http.put<Rent>(url, rent)
  }
}

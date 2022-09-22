import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rents-crud',
  templateUrl: './rents-crud.component.html',
  styleUrls: ['./rents-crud.component.css']
})
export class RentsCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRentCreate(): void {
    this.router.navigate(['/rents/create'])
  }

}

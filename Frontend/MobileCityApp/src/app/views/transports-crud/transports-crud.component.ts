import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transports-crud',
  templateUrl: './transports-crud.component.html',
  styleUrls: ['./transports-crud.component.css']
})
export class TransportsCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToTransportCreate(): void {
    this.router.navigate(['/transports/create'])
  }

}

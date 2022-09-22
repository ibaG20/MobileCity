import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../clients/client.model';
import { ClientService } from '../../clients/client.service';
import { Transport } from '../../transports/transport.model';
import { TransportService } from '../../transports/transport.service';
import { Rent } from '../rent.model';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rents-create',
  templateUrl: './rents-create.component.html',
  styleUrls: ['./rents-create.component.css'],
})
export class RentsCreateComponent implements OnInit {

  rent: Rent = {
    clientId: 0,
    transportId: 0,
    status: true
  }

  clientIdProv!: number
  transportIdProv!: number

  onAddClient(){
    this.rent.clientId = +this.clientIdProv
  }

  onAddTransport(){
    this.rent.transportId = +this.transportIdProv
  }

  clients!: Client[];
  transports!: Transport[];

  constructor(
    private router: Router,
    private rentService: RentService,
    private clientService: ClientService,
    private transportService: TransportService
  ) {}

  ngOnInit(): void {
    this.clientService.read().subscribe((clients) => {
      this.clients = clients;
    });
    this.transportService.read().subscribe((transports) => {
      this.transports = transports;
    });
  }

  createRent(): void {
    this.rentService.create(this.rent).subscribe(() => {
      this.rentService.showMessage('Rent created!');
      this.router.navigate(['/rents']);
    },
    ex => {
      if(ex.error.errors){
        ex.error.errors.forEach((element: { message: string }) => {
          this.rentService.showMessage(element.message);
        });
      }
      else{
          this.rentService.showMessage(ex.error.message);
        }
    });
  }

  cancel(): void {
    this.router.navigate(['/rents'])
  }
}


import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Rent } from '../../rents/rent.model';
import { RentService } from '../../rents/rent.service';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})

export class ClientsDetailsComponent implements OnInit {

  client: Client = {} as Client;

  id = this.route.snapshot.paramMap.get('id')!

  rents!: Rent[];
  dataSource!: MatTableDataSource<Rent>;
  displayedColumns = ['id', 'date', 'transport'];
  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute, private rentService: RentService) { }

  ngOnInit(): void {
    this.clientService.readById(this.id).subscribe(client => {
      this.client = client})
    this.rentService.read().subscribe( rents => {
      this.rents = rents.filter((obj) => { return obj.clientId == +this.id; })
      this.dataSource = new MatTableDataSource(this.rents)
    })
  }

}

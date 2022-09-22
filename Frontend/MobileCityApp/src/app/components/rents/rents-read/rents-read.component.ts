import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../../clients/client.model';
import { ClientService } from '../../clients/client.service';
import { Rent } from '../rent.model';
import { RentService } from '../rent.service';


@Component({
  selector: 'app-rents-read',
  templateUrl: './rents-read.component.html',
  styleUrls: ['./rents-read.component.css']
})
export class RentsReadComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  rents!: Rent[];
  dataSource!: MatTableDataSource<Rent>;
  displayedColumns = ['id', 'date', 'client', 'transport', 'status', 'actions'];

  constructor(private rentService: RentService, private clientService: ClientService) { }

  clients?: Client[]

  getClients(){
    this.clientService.read().subscribe(clients => {
      this.clients = clients
      console.log(clients)
  })}

  ngOnInit(): void {
    this.getClients()
    this.rentService.read().subscribe( rents => {
      this.rents = rents
      this.dataSource = new MatTableDataSource(this.rents)
      console.log(rents)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

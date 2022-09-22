import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-read',
  templateUrl: './clients-read.component.html',
  styleUrls: ['./clients-read.component.css']
})
export class ClientsReadComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  clients!: Client[];
  dataSource!: MatTableDataSource<Client>;
  displayedColumns = ['id', 'name', 'email', 'cpf', 'phone', 'status', 'actions'];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(clients => {
      //this.clients = clients.filter((obj) => { return obj.status == true; })
      this.clients = clients
      this.dataSource = new MatTableDataSource(this.clients)
      console.log(clients)
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

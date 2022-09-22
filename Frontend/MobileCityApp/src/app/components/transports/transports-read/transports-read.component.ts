import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Transport } from '../transport.model';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-transports-read',
  templateUrl: './transports-read.component.html',
  styleUrls: ['./transports-read.component.css']
})
export class TransportsReadComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  transports!: Transport[];
  dataSource!: MatTableDataSource<Transport>;
  displayedColumns = ['id', 'registerDate', 'serialNumber', 'type', 'status', 'actions'];

  constructor(private transportService: TransportService) { }

  ngOnInit(): void {
    this.transportService.read().subscribe(transports => {
      this.transports = transports
      this.dataSource = new MatTableDataSource(this.transports)
      console.log(transports)
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

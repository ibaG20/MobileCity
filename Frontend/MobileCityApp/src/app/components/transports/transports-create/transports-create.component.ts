import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transport } from '../transport.model';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-transports-create',
  templateUrl: './transports-create.component.html',
  styleUrls: ['./transports-create.component.css']
})
export class TransportsCreateComponent implements OnInit {

  transport: Transport = {
    serialNumber: parseInt(''),
    type: '',
    status: true
  }

  constructor(private transportService: TransportService, private router: Router) { }

  ngOnInit(): void {}

  createTransport(): void {
    this.transportService.create(this.transport).subscribe(() => {
      this.transportService.showMessage('Transport created!')
      this.router.navigate(['/transports'])
    });
  }

  cancel(): void {
    this.router.navigate(['/transports'])
  }

}

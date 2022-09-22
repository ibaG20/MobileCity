import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transport } from '../transport.model';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-transports-delete',
  templateUrl: './transports-delete.component.html',
  styleUrls: ['./transports-delete.component.css']
})
export class TransportsDeleteComponent implements OnInit {

  transport: Transport = {
    serialNumber: +'',
    registerDate: '',
    type: '',
    status: true
  }
  id = this.route.snapshot.paramMap.get('id')!

  constructor(private transportService: TransportService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.transportService.readById(this.id).subscribe(transport => {this.transport = transport})
  }

  deleteTransport(): void {
    this.transportService.delete(this.id).subscribe(() => {
      this.transportService.showMessage('Transport deleted!')
      this.router.navigate(['/transports'])
    });
  }

  cancel(): void {
    this.router.navigate(['/transports'])
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transport } from '../transport.model';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-transports-update',
  templateUrl: './transports-update.component.html',
  styleUrls: ['./transports-update.component.css']
})
export class TransportsUpdateComponent implements OnInit {

  transport: Transport = {
    serialNumber: +'',
    registerDate: '',
    type: '',
    status: true
  }
  constructor(private transportService: TransportService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.transportService.readById(id).subscribe(transport => {this.transport = transport})
  }

  updateTransport(): void {
    this.transportService.update(this.transport).subscribe(() => {
      this.transportService.showMessage('Transport updated!')
      this.router.navigate(['/transports'])
    });
  }

  cancel(): void {
    this.router.navigate(['/transports'])
  }

}

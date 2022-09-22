import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-update',
  templateUrl: './clients-update.component.html',
  styleUrls: ['./clients-update.component.css']
})
export class ClientsUpdateComponent implements OnInit {

  client: Client = {
    name: '',
    cpf: '',
    email: '',
    phone: ''
  }

  id = this.route.snapshot.paramMap.get('id')!
  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientService.readById(this.id).subscribe(client => {this.client = client})
  }

  updateClient(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Client updated!')
      this.router.navigate(['/clients'])
    });
  }

  reactiveClient(): void {
    this.client.status = true
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Client reactivated!')
      this.router.navigate(['/clients'])
    });
  }

  cancel(): void {
    this.router.navigate(['/clients'])
  }
}

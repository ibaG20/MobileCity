import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-delete',
  templateUrl: './clients-delete.component.html',
  styleUrls: ['./clients-delete.component.css']
})
export class ClientsDeleteComponent implements OnInit {

  client: Client = {} as Client;

  id = this.route.snapshot.paramMap.get('id')!

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientService.readById(this.id).subscribe(client => {this.client = client})
  }

  deleteClient(): void {
    this.clientService.delete(this.id).subscribe(() => {
      this.clientService.showMessage('Client deleted!')
      this.router.navigate(['/clients'])
    },
    ex => {
      if(ex.error.errors){
        ex.error.errors.forEach((element: { message: string }) => {
          this.clientService.showMessage(element.message);
        });
      }
      else{
          this.clientService.showMessage(ex.error.message);
        }
    });
  }

  cancel(): void {
    this.router.navigate(['/clients'])
  }

}

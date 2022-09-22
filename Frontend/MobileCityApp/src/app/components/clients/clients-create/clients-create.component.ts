import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.css']
})
export class ClientsCreateComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {}

  createClientModel = this.fb.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  })


  public get name(){
    return this.createClientModel.get('name')!
  }

  public get email(){
    return this.createClientModel.get('email')!
  }

  public get cpf(){
    return this.createClientModel.get('cpf')!
  }

  public get phone(){
    return this.createClientModel.get('phone')!
  }

  client: Client = {
    name: '',
    cpf: '',
    email: '',
    phone: '',
    status: true}

  convertToClient() {
    if (this.createClientModel.invalid) return
    this.client = {...this.createClientModel.value} as Client
    this.client.status = true
  }

  createClient(): void {
    this.convertToClient()
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage('Client created!')
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

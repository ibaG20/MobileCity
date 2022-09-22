import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rent } from '../rent.model';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rents-update',
  templateUrl: './rents-update.component.html',
  styleUrls: ['./rents-update.component.css']
})
export class RentsUpdateComponent implements OnInit {

  rent: Rent = {} as Rent;

  constructor(private route: ActivatedRoute, private rentService: RentService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.rentService.readById(id).subscribe(rent => {this.rent = rent})
  }

  finishRent(): void {
    this.rentService.update(this.rent).subscribe(() => {
      this.rentService.showMessage('Rent finished!')
      this.router.navigate(['/rents'])
    });
  }

  cancel(): void {
    this.router.navigate(['/rents'])
  }

}

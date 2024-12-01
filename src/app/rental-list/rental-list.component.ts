import { Component, Input } from '@angular/core';
import { RentalDetailComponent } from '../rental-detail/rental-detail.component';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent {
  @Input() rentals: any[] = [];

  constructor(private rentalDetailComponent: RentalDetailComponent | null) {}

  openDetail(rental: any) {
    if(this.rentalDetailComponent) {
      this.rentalDetailComponent.rental = rental;
      this.rentalDetailComponent.openModal();
    }
  }
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html'
})
export class RentalListComponent {
  @Input() rentals: any[] = [];

  openDetail(rental: any) {
    // Open modal with rental details
  }
}
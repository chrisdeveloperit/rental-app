import { Component } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rental Search App';
  rentals: any[] = [];
  selectedRental: any;

  //constructor(private router: Router) {}

  onRentalsFetched(rentals: any[]) {
    this.rentals = rentals;
  }

  onRentalSelected(rental: any) {
    this.selectedRental = rental;
  }
}

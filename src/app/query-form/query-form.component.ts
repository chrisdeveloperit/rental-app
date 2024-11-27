import { Component } from '@angular/core';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html'
})
export class QueryFormComponent {
  query = {
    city: 'Austin',
    state: 'TX',
    zipCode: '',
    propertyType: 'Single Family',
    bedrooms: 3,
    bathrooms: 2.5
  };
  propertyTypes = ['Single Family', 'Condo', 'Apartment', 'Townhouse', 'Manufactured'];

  constructor(private rentalService: RentalService) {}

  onSubmit() {
    this.rentalService.getRentals(this.query).subscribe(data => {
      // Pass data to rental-list component
    });
  }
}
import { Component } from '@angular/core';
import { RentalService } from '../services/rental.service';
import { Property } from '../entities/property.model';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html'
})
export class QueryFormComponent {
  query = {
    city: 'Austin',
    state: 'TX',
    zipCode: '',
    propertyType: '',
    bedrooms: 2,
    bathrooms: 1,
    status: 'Active',
    limit: 10
  };
  propertyTypes = ['Single Family', 'Condo', 'Apartment', 'Townhouse', 'Manufactured'];
  rentals: Property[] = [];

  constructor(private rentalService: RentalService) {
    console.log('QueryFormComponent constructor');
  }

  onSubmit() {
    this.rentalService.getRentals(this.query).subscribe(data => {
      // Pass data to rental-list component
      console.log(data);
      this.rentals = data;
      // Scroll to the rental-list element
    const rentalListElement = document.getElementById('rental-list');
    if (rentalListElement) {
      rentalListElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    });
  }
}
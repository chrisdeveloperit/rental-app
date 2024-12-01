import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Property } from '../entities/property.model';

interface RentalParams {
  [key: string]: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiUrl = 'https://api.rentcast.io/v1/listings/rental/long-term';
  private apiKey = '7cd1d71cca3441d3848efe3be8e61237';

  constructor() {}
  protected resp: Array<Property> = [{"id":"5931-Patricia-Ryan-Dr,-Charlotte,-NC-28216","formattedAddress":"5931 Patricia Ryan Dr, Charlotte, NC 28216","addressLine1":"5931 Patricia Ryan Dr","addressLine2":null,"city":"Charlotte","state":"NC","zipCode":"28216","county":"Mecklenburg","latitude":35.289258,"longitude":-80.899371,"propertyType":"Single Family","bedrooms":3,"bathrooms":2,"squareFootage":1250,"status":"Active","price":1675,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"createdDate":"2024-10-12T00:00:00.000Z","lastSeenDate":"2024-11-27T04:58:41.100Z","daysOnMarket":1,"history":{"2024-10-16":{"event":"Rental Listing","price":1795,"listingType":"Standard","listedDate":"2024-10-16T00:00:00.000Z","removedDate":"2024-10-17T00:00:00.000Z","daysOnMarket":1},"2024-11-27":{"event":"Rental Listing","price":1675,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"daysOnMarket":1}}},{"id":"516-Grandin-Rd,-Apt-3,-Charlotte,-NC-28208","formattedAddress":"516 Grandin Rd, Apt 3, Charlotte, NC 28208","addressLine1":"516 Grandin Rd","addressLine2":"Apt 3","city":"Charlotte","state":"NC","zipCode":"28208","county":"Mecklenburg","latitude":35.232494,"longitude":-80.8634,"propertyType":"Single Family","bedrooms":2,"bathrooms":1.5,"squareFootage":1238,"status":"Active","price":1850,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"createdDate":"2020-03-07T04:05:02.069Z","lastSeenDate":"2024-11-27T04:58:41.099Z","daysOnMarket":1,"history":{"2024-11-27":{"event":"Rental Listing","price":1850,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"daysOnMarket":1}}},{"id":"1212-Helms-Rd,-Charlotte,-NC-28214","formattedAddress":"1212 Helms Rd, Charlotte, NC 28214","addressLine1":"1212 Helms Rd","addressLine2":null,"city":"Charlotte","state":"NC","zipCode":"28214","county":"Mecklenburg","latitude":35.286903,"longitude":-80.949855,"propertyType":"Single Family","bedrooms":3,"bathrooms":2.5,"squareFootage":1358,"status":"Active","price":1800,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"createdDate":"2020-06-19T01:48:58.241Z","lastSeenDate":"2024-11-27T04:58:41.093Z","daysOnMarket":1,"history":{"2024-11-27":{"event":"Rental Listing","price":1800,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"daysOnMarket":1}}},{"id":"11709-Charnwood-Ct,-Charlotte,-NC-28277","formattedAddress":"11709 Charnwood Ct, Charlotte, NC 28277","addressLine1":"11709 Charnwood Ct","addressLine2":null,"city":"Charlotte","state":"NC","zipCode":"28277","county":"Mecklenburg","latitude":35.043579,"longitude":-80.815476,"propertyType":"Single Family","bedrooms":4,"bathrooms":2.5,"squareFootage":1850,"status":"Active","price":2095,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"createdDate":"2020-07-16T12:09:29.220Z","lastSeenDate":"2024-11-27T04:58:41.093Z","daysOnMarket":1,"history":{"2024-11-27":{"event":"Rental Listing","price":2095,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"daysOnMarket":1}}},{"id":"1321-Burtonwood-Cir,-Charlotte,-NC-28212","formattedAddress":"1321 Burtonwood Cir, Charlotte, NC 28212","addressLine1":"1321 Burtonwood Cir","addressLine2":null,"city":"Charlotte","state":"NC","zipCode":"28212","county":"Mecklenburg","latitude":35.169435,"longitude":-80.761782,"propertyType":"Single Family","bedrooms":3,"bathrooms":2.5,"squareFootage":1820,"status":"Active","price":2250,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"createdDate":"2021-12-02T02:46:39.774Z","lastSeenDate":"2024-11-27T04:58:41.092Z","daysOnMarket":1,"history":{"2024-11-27":{"event":"Rental Listing","price":2250,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"daysOnMarket":1}}},{"id":"9230-Kings-Canyon-Dr,-Charlotte,-NC-28210","formattedAddress":"9230 Kings Canyon Dr, Charlotte, NC 28210","addressLine1":"9230 Kings Canyon Dr","addressLine2":null,"city":"Charlotte","state":"NC","zipCode":"28210","county":"Mecklenburg","latitude":35.10551,"longitude":-80.860456,"propertyType":"Condo","bedrooms":2,"bathrooms":2,"squareFootage":986,"status":"Active","price":1450,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"createdDate":"2019-11-06T01:18:21.310Z","lastSeenDate":"2024-11-27T04:58:41.088Z","daysOnMarket":1,"history":{"2024-11-27":{"event":"Rental Listing","price":1450,"listingType":"Standard","listedDate":"2024-11-27T00:00:00.000Z","removedDate":null,"daysOnMarket":1}}}];

  // use fetch instead of HttpClient
  getRentals(params: RentalParams): Observable<any> {
    const options = {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'X-Api-Key': this.apiKey
      }
    }
    const url = new URL(this.apiUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key].toString()));
    fetch(url.toString(), options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => this.resp = data)
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        })
    return from([this.resp]);
  }

  getRentals2(params: any): Observable<any> {
    console.log('getRentals2', params);
    return from([this.resp]);
  }
}
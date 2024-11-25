import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiUrl = 'https://api.rentcast.io/v1/listings/rental/long-term';
  private apiKey = '7cd1d71cca3441d3848efe3be8e61237';

  constructor(private http: HttpClient) {}

  getRentals(params: any): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'X-Api-Key': this.apiKey
    });
    return this.http.get<any>(this.apiUrl, { headers, params });
  }
}
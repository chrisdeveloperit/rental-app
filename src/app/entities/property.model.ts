// FILE: property.model.ts

export class Property {
  id: string;
  formattedAddress: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  zipCode: string;
  county: string;
  latitude: number;
  longitude: number;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  status: string;
  price: number;
  listingType: string;
  listedDate: string;
  removedDate: string | null;
  createdDate: string;
  lastSeenDate: string;
  daysOnMarket: number;
  history: {
    [key: string]: {
      event: string;
      price: number;
      listingType: string;
      listedDate: string;
      removedDate: string | null;
      daysOnMarket: number;
    };
  };
  constructor(data: any) {
    this.id = data.id;
    this.formattedAddress = data.formattedAddress;
    this.addressLine1 = data.addressLine1;
    this.addressLine2 = data.addressLine2;
    this.city = data.city;
    this.state = data.state;
    this.zipCode = data.zipCode;
    this.county = data.county;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.propertyType = data.propertyType;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.squareFootage = data.squareFootage;
    this.status = data.status;
    this.price = data.price;
    this.listingType = data.listingType;
    this.listedDate = data.listedDate;
    this.removedDate = data.removedDate;
    this.createdDate = data.createdDate;
    this.lastSeenDate = data.lastSeenDate;
    this.daysOnMarket = data.daysOnMarket;
    this.history = data.history;
  }
}
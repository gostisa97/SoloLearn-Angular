import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  // this is where we will recreate our array of Car types
  subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };

  cars: Car[] = [this.subaru, this.honda, this.bmw];

  constructor() {}

  // this is where we will write methods to export our Car array
  getCars() {
    return this.cars;
  }
}

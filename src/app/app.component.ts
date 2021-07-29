import { Component, VERSION } from '@angular/core';
import { Car } from './car';
import { TransportationService } from './transportation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Class variables:
  name = 'Star student';
  prefix = 'I am a ';

  colors: string[] = ['red', 'blue', 'green', 'purple'];
  fruits: string[] = ['apple', 'orange', 'pear', 'peach'];

  subaru: Car = { make: 'Subaru', model: 'Outback', miles: 77500 };
  honda: Car = { make: 'Honda', model: 'Accord', miles: 77600 };
  bmw: Car = { make: 'BMW', model: 'X3', miles: 77700 };
  cars2: Car[] = [this.subaru, this.honda, this.bmw];

  // Inject service into component:
  cars1: Car[];

  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
    this.cars1 = this.transportationService.getCars1();
  }

  saySomething() {
    alert('good day');
  }

  phrase = "It's going";
  update() {
    this.phrase += ' ..and going';
  }

  username: string;

  addCar1() {
    const newCar: Car = { make: 'Tesla', model: 'X', miles: 100 };
    //this.transportationService.addCar1(newCar);
    this.cars1.push(newCar);
  }

  addCar() {
    const newCar: Car = {
      make: this.make,
      model: this.model,
      miles: this.miles
    };
    this.transportationService.addCar(newCar);
  }

  cars: Car[];
  make: string;
  model: string;
  miles: number;

  // variables declared here will be class variables

  speak() {
    // variables declared here will be method variables

    /* "method" refers to a function that is part of a class. 
    Components are classes, so we refer to "functions" inside of them as "methods" */

    // Method variables:
    const sentence = this.prefix + this.name;
    return sentence;
  }
}

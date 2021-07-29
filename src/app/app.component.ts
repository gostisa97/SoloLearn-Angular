import { Component, VERSION } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Class variables:
  name = 'Star student';
  prefix = "I am a ";

  colors:string[] = ['red', 'blue', 'green', 'purple'];
  fruits: string[] = ['apple', 'orange', 'pear', 'peach'];

  subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
  honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
  bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};
  cars:Car[] = [this.subaru, this.honda, this.bmw];

  // variables declared here will be class variables

  speak() {
    // variables declared here will be method variables

    /* "method" refers to a function that is part of a class. 
    Components are classes, so we refer to "functions" inside of them as "methods" */

    // Method variables:
    const sentence = this.prefix + this.name;
    return sentence
  }
}

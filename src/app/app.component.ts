import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  PrimeNumbers: FormGroup;
  numbers: any[] = [];
  count: number;
  prmnumbers: any = ([] = []);
showNumbers: boolean=false;

  constructor() {
    var obj = [
      { id: 1, boy: 5, c: 9 },
      { id: 2, boy: 6, c: 10 },
      { id: 3, boy: 7, c: 11 },
      { id: 4, boy: 8, c: 12 },
    ];
    // const mapped = obj.map(({ a, b }) => ({ a, b }));

    // console.log(mapped, "mapped");
    this.createPrimeNumbers();
  }
  createPrimeNumbers() {
    this.PrimeNumbers = new FormGroup({
      primenumberone: new FormControl(null),
      primenumbertwo: new FormControl(null),
    });
  }

  getPrimes() {
    debugger;
    if (!this.PrimeNumbers.controls['primenumberone'].value) {
      Swal.fire('ALERT!', 'Enter first number', 'warning');
      return;
    }
    if (!this.PrimeNumbers.controls['primenumbertwo'].value) {
      Swal.fire('ALERT!', 'Enter second number', 'warning');
      return;
    }
    if (
      +this.PrimeNumbers.controls['primenumberone'].value >
      +this.PrimeNumbers.controls['primenumbertwo'].value
    ) {
      Swal.fire(
        'ALERT!',
        'first number cannot be greater than second number',
        'warning'
      );
      return;
    }
    this.numbers = [];
    this.prmnumbers = [];
    this.showNumbers=true
    for (
      let i = +this.PrimeNumbers.controls['primenumberone'].value;
      i < +this.PrimeNumbers.controls['primenumbertwo'].value;
      i++
    ) {
      this.numbers.push(i);
      console.log(this.numbers);
    }
    this.primes();
  }
  primes() {
    debugger;
    for (let i = 1; i < this.numbers.length; i++) {
      this.count = 0;
      for (let j = 0; j < this.numbers.length; j++) {
        if (this.numbers[i] % j == 0) {
          this.count++;
        }
      }
      if (this.count == 2 || this.count == 1) {
        this.prmnumbers.push(this.numbers[i]);
      }
    }
  }
}

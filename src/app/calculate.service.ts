import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculateService{
  private a: number;
  private b: number;
  constructor(num1: number, num2: number) {
    this.a = num1;
    this.b = num2;
  }
  // return a + b
  sum(): number{
    return this.a + this.b;
  }
  // return a - b
  minus(): number{
    return this.a - this.b;
  }
  // return a / b
  divide(): number{
    return this.a / this.b;
  }
  // return a * b
  multiplication(): number{
    return this.a * this.b;
  }
  // return a ** b
  degree(): number{
    return this.a ** this.b;
  }
}

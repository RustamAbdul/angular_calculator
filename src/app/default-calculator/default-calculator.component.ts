import { Component, OnInit } from '@angular/core'
import {Form, FormControl} from '@angular/forms'
// tslint:disable-next-line:no-submodule-imports
import {MatButtonToggleModule} from '@angular/material/button-toggle'
// tslint:disable-next-line:no-submodule-imports
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
@Component({
  selector: 'app-default-calculator',
  templateUrl: './default-calculator.component.html',
  styleUrls: ['./default-calculator.component.css']
})
export class DefaultCalculatorComponent{

  constructor() { }

  name = new FormControl('')

  public programmer = false
  public inputValue: any = ''
  public operation: any = ''
  public firstValue: any = ''

  // tslint:disable-next-line:typedef
  progCal(){
    this.programmer = !this.programmer
  }

  // tslint:disable-next-line:typedef
  setValue(inputKey: any){
    this.inputValue += inputKey.target.value
  }

  // tslint:disable-next-line:typedef
  getResult(){
    const result = this.firstValue + this.operation + this.inputValue
    this.firstValue = 'RESULT'
    this.operation = '='
    // tslint:disable-next-line:no-eval
    this.inputValue = eval(result)
  }

  // tslint:disable-next-line:typedef
  setOperation(operation: any){
    if (this.inputValue !== '' && this.firstValue !== ''){
      const result = this.firstValue + this.operation + this.inputValue
      // tslint:disable-next-line:no-eval
      this.firstValue = eval(result)
      this.operation = ''
      this.inputValue = ''
    }else if (this.inputValue === ''){
    }else {
      this.firstValue = this.inputValue
      this.inputValue = ''
    }
    this.operation = operation.target.value
  }

  // tslint:disable-next-line:typedef
  clear(){
    this.firstValue = ''
    this.operation = ''
    this.inputValue = ''
  }

  // tslint:disable-next-line:typedef
  square(power = 2){
    // tslint:disable-next-line:no-unused-expression
    this.inputValue === '' ? this.inputValue = 0 : ''
    this.firstValue = power
    this.operation = '**'
    this.getResult()
  }
}

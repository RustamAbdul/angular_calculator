import { Component, OnInit } from '@angular/core'
import { Form } from '@angular/forms'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
@Component({
  selector: 'app-default-calculator',
  templateUrl: './default-calculator.component.html',
  styleUrls: ['./default-calculator.component.css']
})
export class DefaultCalculatorComponent{

  constructor() { }

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
    this.inputValue = eval(result)
  }

  // tslint:disable-next-line:typedef
  setOperation(operation: any){
    this.operation = operation.target.innerText
    if (this.inputValue === ''){
      this.firstValue = 0
    }else {
      this.firstValue = this.inputValue
      this.inputValue = ''
    }
  }
}

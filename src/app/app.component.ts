import { Component } from '@angular/core';
import { CalculateService } from './calculate.service';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  public inputValue: any = '';
  public operation: any = '';
  public firstValue: any = '';

  // tslint:disable-next-line:typedef
  setValue(inputKey: any){
    this.inputValue += inputKey.target.innerText;
  }
  // tslint:disable-next-line:typedef
  getResult(){
    // tslint:disable-next-line:no-eval
    const result = this.firstValue + this.operation + this.inputValue;
    this.firstValue = 'RESULT';
    this.operation = '=';
    this.inputValue = eval(result);
  }

  // tslint:disable-next-line:typedef
  setOperation(operation: any){
    if (this.inputValue === ''){
      this.operation = operation.target.innerText;
      this.firstValue = 0;
    }else {
      this.operation = operation.target.innerText;
      this.firstValue = this.inputValue;
      this.inputValue = '';
    }
  }

}

import { Component } from '@angular/core';
import {NgModel} from '@angular/forms';
// @ts-ignore
import { ItemsState } from './items-state'
import {NEVER, Observable, of} from 'rxjs'
import {startWith} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  items = [1,2,3,4,5,6]

  public inputValue: any = '';
  public operation: any = '';
  public firstValue: any = '';

  private defaultState: ItemsState = {
    items: [],
    loading: false
  }

  state$: Observable<ItemsState> =
    NEVER.pipe(
      startWith(this.defaultState)
    );
  trackByFn(index, item) {
    return item.id; // уникальный id, соответствующий элементу
  }

  itemChange(input: any){
    this.items.push(input.target.value)
  }

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

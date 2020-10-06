import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultCalculatorComponent} from './default-calculator/default-calculator.component'
import {R3BoundTarget} from '@angular/compiler'
import {TodoListComponent} from './todo-list/todo-list.component'

const routes: Routes = [
  {path: 'default-calc', component: DefaultCalculatorComponent},
  {path: 'todo', component: TodoListComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

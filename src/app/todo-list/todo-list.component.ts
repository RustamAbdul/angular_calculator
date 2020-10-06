import {Component, DoCheck, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core'
import {Task} from '../task'
import {newArray} from '@angular/compiler/src/util'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  tasks: [] = []
  task: string

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    let task = new Task(this.task)
    // @ts-ignore
    this.tasks.push(task)
    this.task = ''
  }

  getTrueCount(array) {
    return array.filter(x=>x.done===false).length
  }

  removeTask(task: Task){
    // @ts-ignore
    let index = this.tasks.indexOf(task)
    this.tasks.splice(index, 1)
  }


}

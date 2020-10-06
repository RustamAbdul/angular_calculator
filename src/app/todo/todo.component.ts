import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {TodoListComponent} from '../todo-list/todo-list.component'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() task: string
  @Output() removeTask = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  doTask(task){
    task.doTask()
  }

  callParentRemoveTask(task){
    this.removeTask.emit(task)
  }
}

import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskModel} from "./task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  getNewTask!: TaskModel;
  listOfTodo: TaskModel [] = [];
  listOfProgress: TaskModel [] = [];
  listOfDone: TaskModel [] = [];


  onGetNewTask(task: TaskModel) {
    this.getNewTask = task;
    if (this.getNewTask) {
      this.listOfTodo.push(this.getNewTask)
    }
  }

  deleteTask(index: number) {
    this.listOfTodo.splice(index, 1)
  }
  moveToProgressFromTodo(task: TaskModel){
    this.listOfTodo = this.listOfTodo.filter((x) => x !== task);
    this.listOfProgress = [...this.listOfProgress, task];
  }
  moveToTodoFromProgress(task: TaskModel){
    this.listOfProgress = this.listOfProgress.filter((x) => x !== task);
    this.listOfTodo = [...this.listOfTodo, task];
  }
  moveToDoneFromProgress(task: TaskModel){
    this.listOfProgress = this.listOfProgress.filter((x) => x !== task);
    this.listOfDone = [...this.listOfDone, task];
  }
  moveToProgressFromDone(task: TaskModel){
    this.listOfDone = this.listOfDone.filter((x) => x !== task);
    this.listOfProgress = [...this.listOfProgress, task];
  }

}

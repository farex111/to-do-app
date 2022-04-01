import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from "../task.model";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() getNewTodo!: TaskModel;
  @Output() backToTodo: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() sendToDone: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  constructor() { }

  ngOnInit(): void {
  }
  onBackToTodo(){
    this.backToTodo.emit()
  }
  OnSendToDone(){
    this.sendToDone.emit()
  }

}

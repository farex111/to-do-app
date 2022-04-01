import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from "../task.model";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  @Input() getNewTask!: TaskModel;
  @Input() index!: number;
  @Output() delete: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() moveToProgress: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteBtnClick(){
    this.delete.emit()
  }
  onMoveToProgress(){
    this.moveToProgress.emit()
  }
}

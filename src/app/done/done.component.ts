import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from "../task.model";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  @Input() getNewProgress!: TaskModel;
  @Output() backToProgress: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onBackToProgress(){
    this.backToProgress.emit()
  }
}

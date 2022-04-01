import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TaskModel} from "../task.model";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  showForm: boolean = false;
  @Output() addNewTask: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  addTaskForm = this.fb.group({
    task: [''],
    difficulty: ['']
  })

  onAddNewTask() {
    this.addNewTask.emit({
      task: this.addTaskForm.controls['task'].value,
      difficulty: this.addTaskForm.controls['difficulty'].value
    })
    this.addTaskForm.reset()
  }

  clickShowForm() {
    this.showForm = true;
  }
}

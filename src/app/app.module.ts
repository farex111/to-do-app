import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {ToDoComponent} from './to-do/to-do.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProgressComponent } from './progress/progress.component';
import { DoneComponent } from './done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoComponent,
    ProgressComponent,
    DoneComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

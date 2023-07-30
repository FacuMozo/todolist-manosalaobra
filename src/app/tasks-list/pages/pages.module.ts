import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskListComponent } from './task-list/task-list.component';




@NgModule({
  declarations: [
    EditTaskComponent,
    TaskDetailComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
    
  ]
})
export class PagesModule { }

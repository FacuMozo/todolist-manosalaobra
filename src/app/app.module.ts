import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModuleModule } from './core-module/core-module.module';
import { SharedModule } from './shared/shared.module';
import { TasksListModule } from './tasks-list/tasks-list.module';
import { TaskListService } from './services/task-list.service';
import { LocalStorageService } from './services/local-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModuleModule,
    TasksListModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [ 
    TaskListService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginPageModule} from './login-page/login-page.module'
import { SharedModule } from './shared/shared.module';
import { EditPageModule } from './edit-page/edit-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    CourseListModule,
    LoginPageModule,
    SharedModule,
    EditPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginPageModule} from './login-page/login-page.module'
import { SharedModule } from './shared/shared.module';
import { EditPageModule } from './edit-page/edit-page.module';
import { ROUTES } from './app.routes';


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
    EditPageModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

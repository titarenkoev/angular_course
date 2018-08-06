import { Routes, RouterModule, CanActivate } from "@angular/router";
import { CourseListComponent } from "./course-list/course-list/course-list.component";
import { EditPageComponent } from "./edit-page/edit-page/edit-page.component";
import { Page404Component } from "./shared/page404/page404.component";
import { LoginFormComponent } from "./login-page/login-form/login-form.component";
import { canActivateAuthGuard } from "./core/canActivateAuthGuard";

export const ROUTES: Routes = [
    {path: '', redirectTo: 'courses', pathMatch: 'full'},

    {path: 'courses', component: CourseListComponent, data: { title: 'Course List' }, canActivate:[canActivateAuthGuard]},
    {path: 'courses/:id', component: EditPageComponent, data: { title: 'Course List' }, canActivate:[canActivateAuthGuard]},

    {path: 'login', component: LoginFormComponent},

    /// page 404
    {path: '**', component: Page404Component}
]
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DurationFormatPipe } from './duration-format.pipe';
import { Page404Component } from './page404/page404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LogoComponent, 
    BreadcrumbsComponent,
    DurationFormatPipe,
    Page404Component
  ],
  exports: [
    FormsModule, HeaderComponent, FooterComponent, BreadcrumbsComponent, DurationFormatPipe, RouterModule
  ]
})
export class SharedModule { }

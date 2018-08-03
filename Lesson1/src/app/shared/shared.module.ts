import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent],
  exports: [
    HeaderComponent, FooterComponent, BreadcrumbsComponent
  ]
})
export class SharedModule { }

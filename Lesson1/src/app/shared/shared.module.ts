import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DurationFormatPipe } from './duration-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LogoComponent, 
    BreadcrumbsComponent,
    DurationFormatPipe
  ],
  exports: [
    HeaderComponent, FooterComponent, BreadcrumbsComponent, DurationFormatPipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent, SearchComponent],
  exports: [
    HeaderComponent, FooterComponent, BreadcrumbsComponent, SearchComponent
  ]
})
export class CoreModule { }

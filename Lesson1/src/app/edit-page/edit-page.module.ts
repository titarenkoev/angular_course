import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule } from '@angular/forms';
import { DateInputComponent } from './date-input/date-input.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { AuthorsInputComponent } from './authors-input/authors-input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [EditPageComponent, DateInputComponent, DurationInputComponent, AuthorsInputComponent],
  exports:[EditPageComponent]
})
export class EditPageModule { }

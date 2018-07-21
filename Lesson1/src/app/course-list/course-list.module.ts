import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseItemBorderDirective } from '../course-item-border.directive';
import { DurationFormatPipe } from '../duration-format.pipe';
import { OrderByPipe } from '../order-by.pipe';
import { SearchPipePipe } from '../search-pipe.pipe';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  declarations: [CourseListComponent, 
    CourseListItemComponent,
    SearchComponent,
    CourseItemBorderDirective, 
    DurationFormatPipe, 
    OrderByPipe,
    SearchPipePipe,
    ConfirmDeleteDialogComponent
    ],
  exports:[CourseListComponent, SearchComponent],
  entryComponents:[ConfirmDeleteDialogComponent]
})
export class CourseListModule { }

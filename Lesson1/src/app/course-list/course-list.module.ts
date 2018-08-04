import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseItemBorderDirective } from '../shared/course-item-border.directive';
import { OrderByPipe } from '../shared/order-by.pipe';
import { SearchPipePipe } from '../shared/search-pipe.pipe';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    SharedModule
  ],
  declarations: [CourseListComponent, 
    CourseListItemComponent,
    SearchComponent,
    CourseItemBorderDirective, 
    OrderByPipe,
    SearchPipePipe,
    ConfirmDeleteDialogComponent
    ],
  exports:[CourseListComponent, SearchComponent],
  entryComponents:[ConfirmDeleteDialogComponent]
})
export class CourseListModule { }

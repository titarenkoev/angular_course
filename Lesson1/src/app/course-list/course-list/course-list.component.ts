import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/course-list/course-list-item.model';
import { CoursesService } from '../../core/courses.service';
import { SearchPipePipe } from '../../shared/search-pipe.pipe';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [ SearchPipePipe ]
})
export class CourseListComponent implements OnInit {
  private allCourseItems: CourseListItem[] = []
  public courseItems: CourseListItem[] = []

  constructor(private coursesServise: CoursesService, private searchPipe: SearchPipePipe, private dialog: MatDialog) { }

  ngOnInit() {
    this.allCourseItems = this.coursesServise.getCourseItems();
    this.courseItems = this.coursesServise.getCourseItems();
  }

  public searchInput:string;

  deleteCourse(id:number){
    console.log("delete click " + id);
      const dialogConfig = new MatDialogConfig();
      let dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        if(result == "Confirm")
        {
          this.coursesServise.RemoveCourse(id);
        }
      });
  }

  searchCourse(value:string){
    console.log("search  "+ value);
    
    this.courseItems = this.searchPipe.transform(this.allCourseItems, value);
  }

  loadMore()
  {
    console.log("load more button pressed");
  }
}

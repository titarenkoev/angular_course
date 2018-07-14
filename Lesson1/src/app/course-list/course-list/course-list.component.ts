import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/course-list/course-list-item.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItems: CourseListItem[] = []

  constructor(private coursesServise: CoursesService) { }

  ngOnInit() {
    this.courseItems = this.coursesServise.getCourseItems();
  }

}

import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/course-list/course-list-item.model';
import { CoursesService } from '../courses.service';
import { SearchPipePipe } from '../../search-pipe.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [ SearchPipePipe ]
})
export class CourseListComponent implements OnInit {
  private allCourseItems: CourseListItem[] = []
  public courseItems: CourseListItem[] = []

  constructor(private coursesServise: CoursesService, private searchPipe: SearchPipePipe) { }

  ngOnInit() {
    this.allCourseItems = this.coursesServise.getCourseItems();
    this.courseItems = this.coursesServise.getCourseItems();
  }
  public searchInput:string;

  deleteCourse(id:number){
    console.log(id);
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

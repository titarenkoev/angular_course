import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../course-list/course-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../core/courses.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  model: CourseListItem;

  constructor(private route:ActivatedRoute, private router: Router, private courseService: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
        if (!isNaN(Number(data['id'])))
        {
          var course = JSON.parse(JSON.stringify(this.courseService.GetCourseById(data['id'])));
          if(course)
          {
            this.model = course;
          }
          else{
            ///redirect 404
            this.router.navigate(['/404']);
          }
        }
        else if (data['id'] == "new")
        {
          this.model = {
            id: 0,
            title: "",
            creationDate: new Date(),
            duration: 0,
            topRated: true,
            description: "",
            authors:""
          };
        }
        else{
          ///redirect 404
          this.router.navigate(['/404']);
        }

    });
  }

  onCancel()
  {
    if(this.model.id !== 0)
    {
      this.model = this.courseService.GetCourseById(this.model.id);
    }
    this.router.navigate(['/courses']);
  }

  onSubmit()
  {
    this.courseService.UpdateCourse(this.model);
    this.router.navigate(['/courses']);
  }

  updateDuration(newValue: number)
  {
    this.model.duration = newValue;
  }

  updateAuthors (newValue: string)
  {
    this.model.authors = newValue;
  }

  updateDate (newValue: Date)
  {
    this.model.creationDate = newValue;
  }
}

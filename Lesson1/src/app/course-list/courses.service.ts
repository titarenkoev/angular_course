import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  public getCourseItems():CourseListItem[]
  {
    return [
      {
        id: 1,
        title: "Video Course 1",
        creationDate: "12.01.2018",
        duration: 30,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      },
      {
        id: 2,
        title: "Video Course 2",
        creationDate: "10.01.2018",
        duration: 100,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      },
      {
        id: 3,
        title: "Video Course 3",
        creationDate: "20.02.2018",
        duration: 80,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      }
    ]
  }
}

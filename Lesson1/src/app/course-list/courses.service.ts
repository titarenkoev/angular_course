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
        title: "Video Course 1 bee",
        creationDate: new Date("October 13, 2014 22:34:17"),
        duration: 30,
        topRated: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      },
      {
        id: 2,
        title: "Video Course 2 beeone",
        creationDate: new Date("November 13, 2018 22:34:17"),
        duration: 100,
        topRated: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      },
      {
        id: 3,
        title: "Video Course 3 onetwo",
        creationDate: new Date("July 13, 2018 22:34:17"),
        duration: 80,
        topRated: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      },
      {
        id: 4,
        title: "Video Course 4 abra",
        creationDate: new Date("July 01, 2018 22:34:17"),
        duration: 60,
        topRated: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      }
    ]
  }
}

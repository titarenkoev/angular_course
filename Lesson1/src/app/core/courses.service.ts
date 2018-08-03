import { Injectable } from '@angular/core';
import { CourseListItem } from '../course-list/course-list-item.model';

@Injectable({
  providedIn: 'root'
})



export class CoursesService {

  constructor() {
    this.courseList = this.baseCourseList;
    console.log ("service course constructor init")
   }

  private baseCourseList = [
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
  ];

  private courseList:CourseListItem[];

  public getCourseItems():CourseListItem[]
  {
    return this.courseList;
  }

  public CreateCourse (titleNew:string, durationNew: number, descriptionNew: string){
    if(!titleNew)
    {
      return;
    }
    var list = this.getCourseItems();
    this.getCourseItems().push({
      id: list.length + 1,
      title: titleNew,
      creationDate: new Date(),
      duration: durationNew,
      topRated: true,
      description: descriptionNew
    });
  }

  public GetCourseById(id:number) : CourseListItem
  {
    return this.getCourseItems().find(e =>  e.id == id);
  }

  public UpdateCourse(id:number, newTitle: string, newDuration: number, newDescription: string, newTopRated:boolean)
  {
    var item = this.GetCourseById(id);
    item.title = newTitle;
    item.duration = newDuration;
    item.description = newDescription;
    item.topRated = newTopRated;
  }

  public RemoveCourse(id:number){
    console.log("Service delete action " + id);
    var item = this.GetCourseById(id);
    var idx = this.getCourseItems().indexOf(item);
    if (idx != -1) {
      this.getCourseItems().splice(idx, 1);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../course-list/course-list-item.model';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  constructor() { }

  model: CourseListItem = {
    id: 10,
    title: "Video Course 10 title",
    creationDate: new Date("October 13, 2014 22:34:17"),
    duration: 88,
    topRated: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
  };

  ngOnInit() {
  }

  onCancel()
  {
    console.log("cancel click");
  }

  onSubmit()
  {
    console.log("submit click");
  }
}

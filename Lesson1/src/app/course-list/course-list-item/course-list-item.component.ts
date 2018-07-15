import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() public courseItem: CourseListItem;
  @Output() CourseDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.CourseDelete.emit(this.courseItem.id);
  }

}

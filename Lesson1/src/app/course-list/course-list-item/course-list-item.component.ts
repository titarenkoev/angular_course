import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() public courseItem: CourseListItem;
  @Output() CourseDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onClick(){
    console.log("delete click " + this.courseItem.id);
      const dialogConfig = new MatDialogConfig();
      let dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        if(result == "Confirm")
        {
          this.CourseDelete.emit(this.courseItem.id);
        }
      });
  }

}

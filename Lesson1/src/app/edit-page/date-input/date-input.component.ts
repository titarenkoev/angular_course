import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {
  @Input() public dateValue: Date;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {
  @Input() public dateValue: Date;
  @Output() dateChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change(newValue) {
    console.log('newvalue', newValue)
    this.dateValue = newValue;
    this.dateChange.emit(newValue);
  }

}

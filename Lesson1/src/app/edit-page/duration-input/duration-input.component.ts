import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent implements OnInit {
  @Input() public durationValue : number;
  @Output() durationChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change(newValue) {
    console.log('newvalue', newValue)
    this.durationValue = newValue;
    this.durationChange.emit(newValue);
  }
}

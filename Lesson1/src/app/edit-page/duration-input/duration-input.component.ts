import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent implements OnInit {
  @Input() public durationValue : number;
  constructor() { }

  ngOnInit() {
  }

}

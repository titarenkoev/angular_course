import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css']
})
export class AuthorsInputComponent implements OnInit {
  @Input() public authorsValue: string;
  @Output() authorsChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change(newValue) {
    console.log('newvalue', newValue)
    this.authorsValue = newValue;
    this.authorsChange.emit(newValue);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() CourseSearch: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  public searchInput:string;

  ngOnInit() {
  }

  searchInit($event: any){
    console.log(this.searchInput);
    this.CourseSearch.emit(this.searchInput);
  }

}

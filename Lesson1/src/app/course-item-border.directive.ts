import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCourseItemBorder]'
})
export class CourseItemBorderDirective {
  
  @Input() creationDate: Date;

  constructor(private el: ElementRef) { 
  }

  ngAfterViewInit(): void {
    console.log("----");
    var currentDate = new Date();
    console.log(currentDate);
    console.log(this.creationDate);
    var temp = new Date();
    temp.setDate(currentDate.getDate() - 14);
    console.log(temp);
    if(this.creationDate < currentDate && this.creationDate >= temp)
    {
      this.el.nativeElement.style.borderColor = 'green';
    }
    else if(this.creationDate > currentDate)
    {
      this.el.nativeElement.style.borderColor = 'blue';
    }
  }
}

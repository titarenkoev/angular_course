import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../course-list/course-list-item.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<CourseListItem>): Array<CourseListItem> {
    console.log("sort pipe");
    if(!array || array === undefined || array.length === 0) return null;



    array.sort((a: CourseListItem, b: CourseListItem) => {
      if (a.creationDate < b.creationDate) {
        return -1;
      } else if (a.creationDate > b.creationDate) {
        return 1;
      } else {
        return 0;
      }
    
  });
  return array;
}

}

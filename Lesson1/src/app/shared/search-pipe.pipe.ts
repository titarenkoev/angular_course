import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../course-list/course-list-item.model';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: Array<CourseListItem>, name: string): Array<CourseListItem> {
    console.log("pipe: searching " + name);
    if(!items) return [];
    if(!name) return items;
    name = name.toLowerCase();
    return items.filter( it => {
      return it.title.toLowerCase().includes(name);
    });
  }

}

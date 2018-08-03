import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat'
})
export class DurationFormatPipe implements PipeTransform {

  transform(value: number): any {
    console.log(value);
    var h = 0;
    var m = 0;
    if(value && value > 0){
      h = Math.floor(value/60);
      m = value - h*60;
      if(h > 0)
      { 
        var s:string;
        s = String(h + "h ");
        return m > 0 ? String(s + m + "min") : s;
      }
      else
      {
        return String(m + "min")
      }
    }
    return null;
  }

}

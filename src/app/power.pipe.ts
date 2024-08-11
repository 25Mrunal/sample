import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(base: number,expo: number): number {
    let p=1;
    for(let i=0;i<=expo;i++)
    {
      p=p*base;

    }
    return p;
  }

}

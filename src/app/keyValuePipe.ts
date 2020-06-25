import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keysvalues'})
export class keyValuePipe implements PipeTransform {
  transform(value: {}, args: string[]): any {
    return Object.keys(value);
  }
}
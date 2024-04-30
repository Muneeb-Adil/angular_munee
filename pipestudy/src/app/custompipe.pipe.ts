import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
  pure : true
})
export class CustompipePipe implements PipeTransform {

  navlue!: string;

  transform(value: string, ...args: unknown[]): any {
    this.navlue=value.split('').reverse().join('')

    return this.navlue;
  }

}

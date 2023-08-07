import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorPercentage'
})
export class ColorPercentagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const numberValue: number = parseFloat(value)
    if (numberValue >= -9.99 && numberValue <= 9.99) {
      return 'var(--blue)';
    }
    if (numberValue > 9.99) {
      return 'var(--red)';
    }
    if (numberValue < -9.99) {
      return 'var(--green)';
    }
    return 'var(--white)';
  }

}

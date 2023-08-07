import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fipePercentage'
})
export class FipePercentagePipe implements PipeTransform {

  transform(userValue: number, fipeValue: string, ...args: unknown[]): string {
    // Formatting `R$ 00.000,00` type string into Integer number
    // to perform percentage calc, userValue already comes as Integer.
    // First remove `R$ `[3] and `,00`[-3], then removing '.' with regex.
    let VVF: number = parseInt(fipeValue.substring(3, fipeValue.length - 3).replace(/\./g, ""))
    let percentage: string = (((userValue - VVF) / VVF) * 100).toFixed(2)

    return `${percentage}`
  }

}

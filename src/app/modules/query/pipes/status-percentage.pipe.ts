import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPercentage'
})
export class StatusPercentagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const numberValue: number = parseFloat(value)
    if (numberValue >= -9.99 && numberValue <= 9.99) {
      return 'Na Média FIPE';
    }
    if (numberValue > 9.99) {
      return 'Acima da FIPE';
    }
    if (numberValue < -9.99) {
      return 'Abaixo da FIPE';
    }
    return 'Cálculo inválido';
  }

}

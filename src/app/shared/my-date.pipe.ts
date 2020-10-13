import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'daydata'
})
export class MyDatePipe implements PipeTransform {
  transform(value: number): string {
    const day = new Date(value * 1000).getDay()
    switch (day) {
        case 0: {
            return 'Понедельник'
        }
        case 1: {
            return 'Вторник'
        }
        case 2: {
            return 'Среда'
        }
        case 3: {
            return 'Четверг'
        }
        case 4: {
            return 'Пятница'
        }
        case 5: {
            return 'Суббота'
        }
        case 6: {
            return 'Воскресенье'
        }
        default: {
            return 'default-value'
        }
    }
  }
}


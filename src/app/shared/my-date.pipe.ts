import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'daydata'
})
export class MyDatePipe implements PipeTransform {
    transform(valueInUTC: number): string {
        const day = new Date(valueInUTC * 1000).getDay()
        const codeDayOfWeek = {
            1: 'Понедельник',
            2: 'Вторник',
            3: 'Среда',
            4: 'Четверг',
            5: 'Пятница',
            6: 'Суббота',
            0: 'Воскресенье'
        }
        return codeDayOfWeek[day]
    }
}


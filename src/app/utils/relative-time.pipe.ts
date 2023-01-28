import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'relativeTime' })

export class RelativeTimePipe implements PipeTransform {
  transform(timestamp: number, args?: any): string {
    const rtf = new Intl.RelativeTimeFormat('en', {
        numeric: 'auto',
    });
    const oneDayInMs = 1000 * 60 * 60 * 24;
    const daysDifference = Math.round(
        (timestamp - new Date().getTime()) / oneDayInMs,
    );
    return rtf.format(daysDifference, 'day');
  }
}
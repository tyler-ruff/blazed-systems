import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phoneValue: number | string, country?: string): any {
    try {
      if(country === undefined){
        country = "US";
      }
      const phoneNumber = parsePhoneNumber(phoneValue + '', country as CountryCode);
      return phoneNumber.formatNational();
    } catch (error) {
      return phoneValue;
    }
  }

}
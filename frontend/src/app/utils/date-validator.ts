import { UserService } from '../services/user.service';
import {AbstractControl} from '@angular/forms';
import {Injectable} from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateValidator {

  private timeout;

  constructor(private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>) {
  }

  

  validate_end_date(initialDate, n) {
    return (control: AbstractControl): Promise<{ [key: string]: boolean }> => {
  
      const value = control.value;
        
      console.log(value)
      // do not call server when input is empty or shorter than 2 characters
      if (!value || value.length < 2) {
        return Promise.resolve(null);
      }
  
      let di
      di = this.dateAdapter.fromModel(initialDate);

      if(!this.ngbCalendar.isValid(di)){
        console.log('1')
        return Promise.resolve({'invalidDate': true});
      }

      if(!moment(value, 'DD/MM/YYYY').isAfter(moment(initialDate, 'DD/MM/YYYY'))){
        console.log('2')
        return Promise.resolve({'endBeforeInitial': true});
      }

      let df
      df = this.dateAdapter.fromModel(value);
      let aux = this.ngbCalendar.getNext(di, 'm', n)

      if(aux.before(df)){
        console.log('3')
        return Promise.resolve({'endBreakLimit': true});
      }

      return Promise.resolve(null);
    }
  }

}

import {Validators, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-mortage-details',
  templateUrl: './mortgage-details.component.html',
  styleUrls: ['./mortage-details.component.scss']
})
export class MortageDetailsComponent implements OnInit {
  public options: Object;
  public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
    };
  public myForm: any;
  public calculatedFields = {
                              endDate: null
                            };

  constructor(private formBuilder: FormBuilder) {
        this.options = {
            chart: { type: 'pie' },
            title : { text : 'MORTGAGE TRADEOFF' },
            series: [{
                data: [60500, 128000],
            }],
            credits: {
              enabled: false
            },
        };
        this.myForm = this.formBuilder.group({
            startingDate: [null, Validators.required],
            principal: [10000, []],
            interestRate: [5.1, []],
            duration: [360, []],
            endDate: [null, []],
            monthlyAmount: [null,[]]
        });
    }


  ngOnInit() {
    this.myForm.valueChanges.subscribe((data) => {
      this.recalculate(data);
    });
  }

  recalculate(data) {
    if (!this.myForm.pristine) {
      this.myForm.markAsPristine();
        if (data.startingDate !== null && data.duration) { 
          this.calculateEndDate();
        }
        this.mortageParams();
    }
  }

  calculateEndDate() {
    const date = this.myForm.controls.startingDate.value.date;
    const endDate = new Date(date.year, date.month + parseInt(this.myForm.controls.duration.value, 10), date.day);
    this.myForm.controls.endDate.setValue({
                                            date: {
                                                  day: endDate.getDate(),
                                                  month: endDate.getMonth(),
                                                  year: endDate.getFullYear()
                                            }});
  }

  mortageParams() {
  /*
  ir - interest rate per month
  np - number of periods (months)
  pv - present value
  fv - future value (residual value)
  */
  const ir = parseFloat(this.myForm.controls.interestRate.value) / 100 / 12;
  const np = parseInt(this.myForm.controls.duration.value, 10);
  const pv = parseFloat(this.myForm.controls.principal.value);
  const fv = 0;
  const pvif = Math.pow(1 + ir, np);
  const pmt = ir * pv * (pvif + fv) / (pvif - 1);
  // pmt /= (1 + ir);
  this.myForm.controls.monthlyAmount.setValue(pmt.toFixed(2) + '€');
}

}

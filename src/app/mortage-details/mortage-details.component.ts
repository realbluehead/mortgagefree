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
            duration: [360, []]
        });
    }


  ngOnInit() {
    this.myForm.valueChanges.subscribe((data) => {
      this.recalculate(data);
    });
  }

  recalculate(data) {
    if (data.startingDate !== null) {
      this.calculateEndDate();
    }
  }

  calculateEndDate() {
    let date = this.myForm.controls.startingDate.value.date;
    console.log(date);
    console.log('adding months ' + this.myForm.controls.duration.value);
    const end = new Date(date.year, date.month + this.myForm.controls.duration.value + 1, date.day);
    this.calculatedFields.endDate = end;
  }

}

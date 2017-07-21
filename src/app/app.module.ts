import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MortageDetailsComponent } from './mortage-details/mortage-details.component';
import { MortgageAmortizationComponent } from './mortage-details/mortgage-amortization/mortgage-amortization.component';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { MyDatePickerModule } from 'mydatepicker';

declare var require: any;

export function highchartsFactory() {
      const hc = require('highcharts');
      const dd = require('highcharts/modules/drilldown');
      dd(hc);

      return hc;
    }

@NgModule({
  declarations: [
    AppComponent,
    MortageDetailsComponent,
    MortgageAmortizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ChartModule,
    MyDatePickerModule 
  ],
  providers: [
        {
          provide: HighchartsStatic,
          useFactory: highchartsFactory
        }
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }

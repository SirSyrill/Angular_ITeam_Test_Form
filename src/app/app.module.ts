import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NativeDateAdapter } from "@angular/material/core";

import { AppComponent } from './app.component';

export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: Object): string {

      if (displayFormat === 'input') {

          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();

          return `${day}-${month}-${year}`;
      }

      return date.toDateString();
  }
}

export const APP_DATE_FORMATS =
{
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

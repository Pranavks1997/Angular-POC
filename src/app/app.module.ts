import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchBillComponent } from './components/fetch-bill/fetch-bill.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbTreeGridModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FsIconComponent } from './components/nb-fs-icon/nb-fs-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchBillComponent,
    PatientDetailsComponent,
    BillDetailsComponent,
    FsIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbTreeGridModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { PatientDetailsInputs } from '../common-utils/common.constants';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  items: { title: string; inputType: string; }[];

  constructor() {

   }

  ngOnInit() {
    this.items = PatientDetailsInputs;
  }

}

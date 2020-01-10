import { Component, OnInit } from '@angular/core';
import {
  PatientDetailsInputs,
  PatientInfo
} from '../common-utils/common.constants';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  PatientDetailsInputs: { title: string; inputType: string }[];
  private PatientInfoForm: FormGroup;
  PatientInfoFromService: any;

  constructor() {
    // Reactive form for patient information form
    this.PatientInfoForm = new FormGroup({
      Patient_Name: new FormControl(),
      DocName: new FormControl(),
      DOA: new FormControl(),
      Discharge_dt: new FormControl(),
      ContactNo: new FormControl(),
      cWard_Desc: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.PatientInfoFromService = PatientInfo;
    this.PatientInfoForm.patchValue({
      Patient_Name: this.PatientInfoFromService.Patient_Name,
      DOA: this.PatientInfoFromService.DOA,
      Discharge_dt: this.PatientInfoFromService.Discharge_dt,
      ContactNo: this.PatientInfoFromService.ContactNo,
      DocName: this.PatientInfoFromService.DocName,
      cWard_Desc: this.PatientInfoFromService.cWard_Desc
    });
    this.PatientDetailsInputs = PatientDetailsInputs;
  }
}

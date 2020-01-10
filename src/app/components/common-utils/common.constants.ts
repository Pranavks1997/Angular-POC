export const PatientDetailsInputs = [
  {
    title: 'Name',
    inputType: 'text',
    formControlName: 'Patient_Name',
  },
  {
    title: 'Docter Name',
    inputType: 'text',
    formControlName: 'DocName',
  },
  {
    title: 'DOA',
    inputType: 'text',
    formControlName: 'DOA',
  },
  {
    title: 'Phone #',
    inputType: 'number',
    formControlName: 'ContactNo',
  },
  {
    title: 'Ward',
    inputType: 'text',
    formControlName: 'cWard_Desc',
  },
  {
    title: 'DOD',
    inputType: 'text',
    formControlName: 'Discharge_dt',
  }
];

export const PatientInfo = {
  IPNumber: 315701,
  Patient_Name: 'Patient 1',
  AgeSex: '6 Years / F',
  DOA: '11-12-2019 10:34AM',
  DocName: 'Dr.RAVI M D',
  Address1: 'D/O MAHESH KUMAR',
  Address2: 'Address 2',
  Address3: 'Address 3',
  PinCode: '',
  City: 'MYSURU',
  Discharge_dt: '14-12-2019 11:57:57',
  ContactNo: 123456789,
  Corporate: 'STAR HEALTH & ALLIED INSURANCE COMPANY LIMITED - REF.NO : 0',
  cWard_Desc: 'PAEDIATRICS WARD',
  cBed_No: 'PAED-47'
};

export const BillDetails = [
  {
    data: {
      Date: '12-12-2019',
      HeaderName: 'BED CHARGES',
      ServiceName: 'BED CHARGES (PER DAY)',
      Qty: 1,
      TotalServiceRate: 330,
      ConcessionAmt: 0,
      Edit: 0
    }
  },
  {
    data: {
      Date: '12-12-2019',
      HeaderName: 'XRAY',
      ServiceName: 'XRAY CHEST PA OR AP',
      Qty: 1,
      TotalServiceRate: 250,
      ConcessionAmt: 0,
      Edit: 0
    }
  },
  {
    data: {
      Date: '13-11-2019',
      HeaderName: 'NEBULIZATION CHARGE',
      ServiceName: 'NEBULIZATION CHARGES PER SITTING',
      Qty: 12,
      TotalServiceRate: 600,
      ConcessionAmt: 0,
      Edit: 0
    }
  }
];

export const BillHeader = {
  BillNo: 97778,
  Bill_Dt: '14-12-2019 10:52AM',
  Bill_Total: 4871,
  Bill_Payable: 4871
};

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchBillComponent } from './fetch-bill.component';

describe('FetchBillComponent', () => {
  let component: FetchBillComponent;
  let fixture: ComponentFixture<FetchBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

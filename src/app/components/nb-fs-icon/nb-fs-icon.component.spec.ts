import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbFsIconComponent } from './nb-fs-icon.component';

describe('NbFsIconComponent', () => {
  let component: NbFsIconComponent;
  let fixture: ComponentFixture<NbFsIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbFsIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbFsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

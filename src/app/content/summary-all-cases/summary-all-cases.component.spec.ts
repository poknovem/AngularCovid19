import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAllCasesComponent } from './summary-all-cases.component';

describe('SummaryAllCasesComponent', () => {
  let component: SummaryAllCasesComponent;
  let fixture: ComponentFixture<SummaryAllCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryAllCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryAllCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

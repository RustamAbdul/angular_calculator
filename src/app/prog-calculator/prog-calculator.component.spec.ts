import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgCalculatorComponent } from './prog-calculator.component';

describe('ProgCalculatorComponent', () => {
  let component: ProgCalculatorComponent;
  let fixture: ComponentFixture<ProgCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

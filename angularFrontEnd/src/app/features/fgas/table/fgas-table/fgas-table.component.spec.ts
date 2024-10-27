import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgasTableComponent } from './fgas-table.component';

describe('FgasTableComponent', () => {
  let component: FgasTableComponent;
  let fixture: ComponentFixture<FgasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FgasTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

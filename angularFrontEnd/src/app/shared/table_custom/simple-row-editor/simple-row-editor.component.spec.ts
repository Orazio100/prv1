import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRowEditorComponent } from './simple-row-editor.component';

describe('SimpleRowEditorComponent', () => {
  let component: SimpleRowEditorComponent;
  let fixture: ComponentFixture<SimpleRowEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleRowEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleRowEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

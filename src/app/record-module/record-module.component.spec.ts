import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordModuleComponent } from './record-module.component';

describe('RecordModuleComponent', () => {
  let component: RecordModuleComponent;
  let fixture: ComponentFixture<RecordModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

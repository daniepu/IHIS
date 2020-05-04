import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffFormComponent } from './stuff-form.component';

describe('StuffFormComponent', () => {
  let component: StuffFormComponent;
  let fixture: ComponentFixture<StuffFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

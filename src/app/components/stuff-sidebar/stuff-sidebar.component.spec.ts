import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffSidebarComponent } from './stuff-sidebar.component';

describe('StuffSidebarComponent', () => {
  let component: StuffSidebarComponent;
  let fixture: ComponentFixture<StuffSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

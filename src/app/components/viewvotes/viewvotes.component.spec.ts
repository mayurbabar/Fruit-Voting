import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvotesComponent } from './viewvotes.component';

describe('ViewvotesComponent', () => {
  let component: ViewvotesComponent;
  let fixture: ComponentFixture<ViewvotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

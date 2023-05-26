import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerListComponent } from './cleaner-list.component';

describe('CleanerListComponent', () => {
  let component: CleanerListComponent;
  let fixture: ComponentFixture<CleanerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerAddComponent } from './cleaner-add.component';

describe('CleanerAddComponent', () => {
  let component: CleanerAddComponent;
  let fixture: ComponentFixture<CleanerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

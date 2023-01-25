import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbrandComponent } from './newbrand.component';

describe('NewbrandComponent', () => {
  let component: NewbrandComponent;
  let fixture: ComponentFixture<NewbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandtableComponent } from './brandtable.component';

describe('BrandtableComponent', () => {
  let component: BrandtableComponent;
  let fixture: ComponentFixture<BrandtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

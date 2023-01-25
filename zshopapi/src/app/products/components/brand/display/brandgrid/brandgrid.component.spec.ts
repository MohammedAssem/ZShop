import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandgridComponent } from './brandgrid.component';

describe('BrandgridComponent', () => {
  let component: BrandgridComponent;
  let fixture: ComponentFixture<BrandgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

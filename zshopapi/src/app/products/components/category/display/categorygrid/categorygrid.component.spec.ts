import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorygridComponent } from './categorygrid.component';

describe('CategorygridComponent', () => {
  let component: CategorygridComponent;
  let fixture: ComponentFixture<CategorygridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorygridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

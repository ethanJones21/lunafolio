import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFullDownComponent } from './carousel-full-down.component';

describe('CarouselFullDownComponent', () => {
  let component: CarouselFullDownComponent;
  let fixture: ComponentFixture<CarouselFullDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselFullDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselFullDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

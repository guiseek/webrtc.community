import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFragment } from './slide.fragment';

describe('SlideFragment', () => {
  let component: SlideFragment;
  let fixture: ComponentFixture<SlideFragment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideFragment ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFragment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAudioComponent } from './check-audio.component';

describe('CheckAudioComponent', () => {
  let component: CheckAudioComponent;
  let fixture: ComponentFixture<CheckAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

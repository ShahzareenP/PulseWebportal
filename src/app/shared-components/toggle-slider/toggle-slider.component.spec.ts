import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSliderComponent } from './toggle-slider.component';
import { SharedComponentsModule } from '../shared-components.module';

describe('ToggleSliderComponent', () => {
  let component: ToggleSliderComponent;
  let fixture: ComponentFixture<ToggleSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleSliderComponent],
      imports: [SharedComponentsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleSliderComponent);
    component = fixture.componentInstance;

    component.toggleConfig = {
      toggleLabel: 'Toggle',
      defaultToggleValue: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check toggleChanged method', () => {
    let event = {
      source: {
        checked: true,
      },
    };
    component.toggleChanged(event);
  });
});

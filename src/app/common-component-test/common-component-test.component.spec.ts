import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComponentTestComponent } from './common-component-test.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

describe('CommonComponentTestComponent', () => {
  let component: CommonComponentTestComponent;
  let fixture: ComponentFixture<CommonComponentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonComponentTestComponent],
      imports: [SharedComponentsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

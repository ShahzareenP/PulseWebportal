import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import { SharedComponentsModule } from '../shared-components.module';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent],
      imports: [SharedComponentsModule],
      providers: [
        {
          provide: MatSnackBarRef,
          useValue: {},
        },
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: {}, // Add any data you wish to test if it is passed/used correctly
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

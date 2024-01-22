import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsComponent } from './widgets.component';
import { SharedComponentsModule } from '../shared-components.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetsComponent],
      imports: [SharedComponentsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    component.widgetsConfig = {
      id: 'widget',
      tabViewConfig: [
        { tabName: 'CASH' },
        { tabName: 'TOM' },
        { tabName: 'SPOT' },
        { tabName: 'FWD' },
      ],
      isShowDatePicker: true,
      headerDropDownData: [
        {
          name: 'AUD/USD',
          short: 'AUD/USD',
        },
        {
          name: 'EUR/INR',
          short: 'EUR/INR',
        },
        {
          name: 'EUR/USD',
          short: 'EUR/USD',
        },
        {
          name: 'USD/INR',
          short: 'USD/INR',
        },
      ],
      headerDropDownKey: 'name',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check refreshButtonClicked',()=>{
    component.refreshButtonClicked();
  })

  it('should check cancelButtonClicked',()=>{
    component.cancelButtonClicked();
  })

  it('should check copyButtonClicked',()=>{
    component.copyButtonClicked();
  })

  it('should check screenSizeChange',()=>{
    component.screenSizeChange();
  })
});

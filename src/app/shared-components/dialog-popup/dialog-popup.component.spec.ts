import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPopupComponent } from './dialog-popup.component';
import { SharedComponentsModule } from '../shared-components.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DialogPopupComponent', () => {
  let component: DialogPopupComponent;
  let fixture: ComponentFixture<DialogPopupComponent>;
  const dialogMock = {
    close: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogPopupComponent],
      imports: [SharedComponentsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check closeWindow method', () => {
    const spy = jest.spyOn(component.dialogref, 'close').mockReset();

    component.closeWindow('');
    expect(spy).toHaveBeenCalled();
  });

  it('should check processBtnPressed method', () => {
    const spy = jest.spyOn(component.dialogref, 'close').mockReset();

    component.processBtnPressed('');
    expect(spy).toHaveBeenCalled();
  });
});

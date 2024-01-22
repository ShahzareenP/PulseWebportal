import { TestBed } from '@angular/core/testing';

import { DialogPopupService } from './dialog-popup.service';
import { SharedComponentsModule } from '../shared-components.module';

describe('DialogPopupService', () => {
  let service: DialogPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule],
    });
    service = TestBed.inject(DialogPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check openDialog method with all value passed', () => {
    service.openDialog({
      message: 'Test',
      processButtonLabel: 'Yes',
      cancelButtonLabel: 'No',
    });
  });

  it('check openDialog method with all value passed', () => {
    service.openDialog({
      message: 'Test',
    });
  });
});

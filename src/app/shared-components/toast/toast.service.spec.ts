import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { SharedComponentsModule } from '../shared-components.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './toast.component';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, NoopAnimationsModule],
      declarations: [ToastComponent],
    });
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('checks error method', () => {
    service.error('Pulse Application Failed Toaster', 'center', 'bottom');
    // service.error('Pulse Application Failed Toaster');
  });

  it('checks success method', () => {
    service.success('Pulse Application Failed Toaster', 'center', 'bottom');
    // service.success('Pulse Application Failed Toaster');
  });

  it('checks info method', () => {
    service.info('Pulse Application Failed Toaster', 'center', 'bottom');
    // service.info('Pulse Application Failed Toaster');
  });
});

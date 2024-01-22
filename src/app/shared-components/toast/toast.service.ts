import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _snackBar: MatSnackBar) {}

  error(message: string, horizontalPosition?: any, verticalPosition?: any) {
    return this._snackBar.openFromComponent(ToastComponent, {
      data: {
        message: message,
        type: 'ERROR',
      },
      duration: 1500,
      horizontalPosition: horizontalPosition || 'right',
      verticalPosition: verticalPosition || 'top',
      panelClass: 'toast-style',
    });
  }

  success(message: string, horizontalPosition?: any, verticalPosition?: any) {
    return this._snackBar.openFromComponent(ToastComponent, {
      data: {
        message: message,
        type: 'SUCCESS',
      },
      duration: 1500,
      horizontalPosition: horizontalPosition || 'right',
      verticalPosition: verticalPosition || 'top',
    });
  }

  info(message: string, horizontalPosition?: any, verticalPosition?: any) {
    return this._snackBar.openFromComponent(ToastComponent, {
      data: {
        message: message,
        type: 'INFO',
      },
      duration: 1500,
      horizontalPosition: horizontalPosition || 'right',
      verticalPosition: verticalPosition || 'top',
      panelClass: 'toast-style',
    });
  }
}

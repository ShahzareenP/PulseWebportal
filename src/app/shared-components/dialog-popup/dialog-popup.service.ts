import { Injectable } from '@angular/core';
import { DialogPopupComponent } from './dialog-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopup } from './dialog-popup.model';

@Injectable({
  providedIn: 'root',
})
export class DialogPopupService {
  constructor(public dialog: MatDialog) {}

  openDialog(dialogConfig: DialogPopup): void {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '500px',
      height: '100px',
      data: {
        message: dialogConfig?.message,
        processButtonLabel: dialogConfig?.processButtonLabel || 'OK',
        cancelButtonLabel: dialogConfig?.cancelButtonLabel || 'Cancel',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog is closed');
    });
  }
}

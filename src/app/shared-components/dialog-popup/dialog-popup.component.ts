import { Component, EventEmitter, Inject, OnDestroy, OnInit, Optional, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogPopup } from './dialog-popup.model';

@Component({
  selector: 'papp-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
})
export class DialogPopupComponent implements OnInit, OnDestroy{

  @Output() processButtonEvent = new EventEmitter<any>();
  @Output() cancelButtonEvent = new EventEmitter<any>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogPopup,
    @Optional() public dialogref: MatDialogRef<DialogPopupComponent>
  ) {
  }

  ngOnInit(): void {}

  closeWindow(event: any) {
    this.dialogref.close();
    this.cancelButtonEvent.emit(event);
  }

  processBtnPressed(event: any) {
    console.log("ok");
    this.dialogref.close();
    this.processButtonEvent.emit(event);
  }

  ngOnDestroy(): void {
  }
}

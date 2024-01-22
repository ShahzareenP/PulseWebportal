import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { widgetsConfig } from './widgets.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';

@Component({
  selector: 'papp-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  @Input() set widgetsConfig(config: widgetsConfig) {
    this._widgetConfig = config;
    this.tabViewConfig = config?.tabViewConfig;
    this.headerDropDownData = config?.headerDropDownData;
    this.headerDropDownKey = config?.headerDropDownKey;
    this.showAmountInput = config?.showAmountInput ?? true;
    this.headerLabel = config?.headerLabel ?? '';
    this.showDropDownInHeader = config?.showDropDownInHeader ?? true;
  }

  @Output() refreshButtonClickedEvent = new EventEmitter<any>();
  @Output() cancelButtonClickedEvent = new EventEmitter<any>();
  @Output() copyhButtonClickedEvent = new EventEmitter<any>();
  @Output() inputValues = new EventEmitter<any>();

  _widgetConfig!: widgetsConfig;
  headerDropDownData!: any[];
  headerDropDownKey: any;
  selectedCountryControl = new FormControl();
  tabViewConfig!: any[];
  amountFormControl = new FormControl('', [Validators.required]);
  isCardExpanded = false;
  showDropDownInHeader!: boolean;
  headerLabel!: string;
  showAmountInput!: boolean;

  get widgetsConfig() {
    return this._widgetConfig;
  }

  constructor(public dialog: MatDialog) {}

  // selectedCountry: string
  onHeaderDropDownChange(event: any) {
    // this.selectedCurrency = event?.value
    console.log('widgetsConfig', this.headerDropDownData);
  }

  ngOnInit() {
    this.headerLabel = 'FX Deals';
    this.showDropDownInHeader = false;
    this.showAmountInput = false;
  }

  refreshButtonClicked() {
    console.log('Refresh Button clicked');
    this.refreshButtonClickedEvent?.emit('Refresh Button clicked');
  }

  cancelButtonClicked() {
    console.log('Cancel Button clicked');
    this.cancelButtonClickedEvent?.emit('Cancel Button clicked');
  }

  copyButtonClicked() {
    console.log('Copy Button clicked');
    this.copyhButtonClickedEvent?.emit('Copy Button clicked');
  }

  screenSizeChange() {
    // this.isCardExpanded = !this.isCardExpanded;
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '600px',
      height: '550px',
      data: { name: 'Test' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

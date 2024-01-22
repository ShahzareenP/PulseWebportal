import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AutoComplete } from './auto-complete.model';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'papp-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit, OnDestroy {
  @Input() autoCompleteConfig!: AutoComplete;
  // inputs
  inputControl = new FormControl('');
  @ViewChild(MatSelect) public matSelect!: MatSelect;

  options!: Array<any>;
  targetKey!: string;
  selectedOptions!: any[];

  constructor() {}

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.options = this.autoCompleteConfig?.options;
    this.selectedOptions = this.options;
    this.targetKey = this.autoCompleteConfig?.targetKey;
  }

  onKeyUp(inputValue: any) {
    this.selectedOptions = this.searchOption(inputValue);
  }

  searchOption(value: any) {
    let filter = value.toLowerCase();
    return this.options.filter((option) =>
      option[this.targetKey].toLowerCase().startsWith(filter)
    );
  }

  selectionChange(event: any){
    this.inputControl.setValue('');
    this.selectedOptions = this.options;
  }

  ngOnDestroy(): void {}
}

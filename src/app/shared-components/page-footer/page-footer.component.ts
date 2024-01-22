import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PageFooterConfig } from './page-footer.model';

@Component({
  selector: 'papp-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})
export class PageFooterComponent implements OnInit, OnDestroy {
  @Input() pageFooterConfig!: PageFooterConfig;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {}
}

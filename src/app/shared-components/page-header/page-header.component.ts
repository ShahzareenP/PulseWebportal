import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PageHeaderConfig } from './page-header.model';
@Component({
  selector: 'papp-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  @Input() pageHeaderConfig!: PageHeaderConfig;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {}
}

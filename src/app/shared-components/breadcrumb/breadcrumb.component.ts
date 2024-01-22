import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { BreadcrumbConfig } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';
import { AppUtil } from 'src/app/util/app-util';
import { Router } from '@angular/router';

@Component({
  selector: 'papp-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbConfig!: BreadcrumbConfig[];
  activeBreadcrumbLabel!: string;

  subscriptions: Array<Subscription> = [];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private cdr: ChangeDetectorRef,
    private appUtil: AppUtil,
  ) {
    // Check breadcrumb config.
    this.subscriptions?.push(
      this.breadcrumbService?.getBreadcrumbConfig()?.subscribe({
        next: (breadcrumb) => {
          // Assign new breadcrumb config.
          this.breadcrumbConfig = breadcrumb;
          this.cdr?.markForCheck();
        },
        error: (err) => {
          console.warn(err);
        },
      }),
      this.appUtil?.getBreadcrumbClickEvent()?.subscribe((response) => {
        this.activeBreadcrumbLabel = response?.label as string;
      })
    );
  }

  ngOnInit(): void { }

  /** Event called when breadcrumb clicked.
   *   @Param breadcrumb : Includes breadcrumb label and router link.
   */
  onBreadcrumbClick(breadcrumb: any) {
    this.activeBreadcrumbLabel = breadcrumb?.label;

    this.breadcrumbService?.setBreadcrumbClickEvent(breadcrumb);
  }

  ngOnDestroy() {
    this.subscriptions?.map((subscription) => subscription?.unsubscribe());
  }
}

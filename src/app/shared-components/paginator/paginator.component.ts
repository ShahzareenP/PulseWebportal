import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PaginatorEventData, PaginationConfig } from './paginator.model';
import { Subscription } from 'rxjs';
import { PaginatorService } from './paginator.service';

@Component({
  selector: 'papp-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, OnDestroy {
  pageEvent!: PageEvent;
  paginationConfig!: PaginationConfig;
  @Output() paginatorChange = new EventEmitter<PaginatorEventData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  subscriptions: Array<Subscription> = [];
  totalPages!: number;
  pageOptions!: number[];

  constructor(private paginatorService: PaginatorService) {
    this.paginatorService?.getPaginatorConfig().subscribe({
      next: (response) => {
        this.paginationConfig = response;
      },
      error: (error) => {
        console.warn(error);
      },
    });
  }

  ngOnInit(): void {
    this.pageEvent = {
      pageIndex: 0,
      pageSize: this.paginationConfig?.recordsPerPage ?? this.pageOptions[0] ?? 2,
      length: this.paginationConfig?.totalRecords,
    };
    this.totalPages = Math.ceil(this.pageEvent?.length / this.pageEvent?.pageSize);
    this.pageOptions = this.paginationConfig?.pageOptions || [2,4,6];
  }

  onPaginatorChange(event: any) {
    this.paginatorChange.emit(event);
    this.pageEvent = event;
    this.totalPages = Math.ceil(
      this.paginator?.length / this.paginator?.pageSize
    );
  }

  navigateToSpecificPage(event: any) {
    event = event?.target?.value;
    if (event > this.paginationConfig?.totalRecords) {
      event = this.paginationConfig?.totalRecords;
    } else if (event < 0) {
      event = 1;
    }
    this.paginator.pageIndex = event - 1;
    this.pageEvent = {
      pageIndex: this.paginator?.pageIndex,
      pageSize: this.paginator?.pageSize,
      length: this.paginator?.length,
    };
    this.paginator.page.next(this.pageEvent);
    this.paginatorChange.emit(this.pageEvent);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

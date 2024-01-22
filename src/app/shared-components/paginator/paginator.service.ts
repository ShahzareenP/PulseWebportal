import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaginationConfig } from './paginator.model';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {
  private paginatorConfig$ = new BehaviorSubject<PaginationConfig>({
    totalRecords: 0
  });

  constructor() { }

  setPaginatorConfig(pageinationConfig: PaginationConfig): void {
    this.paginatorConfig$.next(pageinationConfig);
  }

  getPaginatorConfig(): Observable<PaginationConfig> {
    return this.paginatorConfig$.asObservable();
  }
}

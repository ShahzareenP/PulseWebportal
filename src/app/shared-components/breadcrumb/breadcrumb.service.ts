import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BreadcrumbConfig } from './breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  // Breadcrumb config.
  private breadcrumbConfig$: BehaviorSubject<Array<BreadcrumbConfig>> =
    new BehaviorSubject([{
      label: '',
      link: ''
    }]);

  // Breadcrumb response. After clicking breadcrumb send the clicked breadcrumb details
  private breadcrumbResponse$: Subject<BreadcrumbConfig> = new Subject();


  constructor() { }

  /** Set breadcrumb config.
   *   @Param breadcrumbConfig : Includes breadcrumb label and router link details
   */
  setBreadcrumbConfig(breadcrumbConfig: BreadcrumbConfig[]): void {
    this.breadcrumbConfig$?.next(breadcrumbConfig);
  }

  /** Get breadcrumb config.
   *   @Returns breadcrumbConfig : Includes breadcrumb label and router link details
   */
  getBreadcrumbConfig(): Observable<BreadcrumbConfig[]> {
    return this.breadcrumbConfig$?.asObservable();
  }

  /** Set breadcrumb details after click
   *   @Param breadcrumbResponse : Includes breadcrumb label and router link details
   */
  setBreadcrumbClickEvent(breadcrumbResponse: BreadcrumbConfig) {
    this.breadcrumbResponse$?.next(breadcrumbResponse);
  }

  /** Get breadcrumb details after click
   *   @Returns breadcrumbResponse : Includes breadcrumb label and router link details
   */
  getBreadcrumbClickEvent(): Observable<BreadcrumbConfig> {
    return this.breadcrumbResponse$?.asObservable();
  }

}

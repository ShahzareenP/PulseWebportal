import { Injectable } from '@angular/core';
import { BreadcrumbConfig } from '../shared-components/breadcrumb/breadcrumb.model';
import { BreadcrumbService } from '../shared-components/breadcrumb/breadcrumb.service';
import { Observable } from 'rxjs';
import { LoaderService } from '../shared-components/loader/loader.service';
import { LoaderConfig } from '../shared-components/loader/loader.model';

@Injectable({
  providedIn: 'root',
})
export class AppUtil {
  constructor(
    private breadcrumbService: BreadcrumbService,
    private loaderService: LoaderService
  ) {}

  /** Set breadcrumb config.
   *   @Param breadcrumbConfig : Array of Breadcrumb config objects. Breadcrumb config includes breadcrumb label and router link details.
   */
  setBreadcrumbConfig(breadcrumbConfig: BreadcrumbConfig[]) {
    this.breadcrumbService?.setBreadcrumbConfig(breadcrumbConfig);
  }

  /** Get breadcrumb details after click.
   *   @Returns breadcrumbResponse : Includes breadcrumb label and router link details.
   */
  getBreadcrumbClickEvent(): Observable<BreadcrumbConfig> {
    return this.breadcrumbService?.getBreadcrumbClickEvent();
  }

  // Loader service
  setLoaderConfig(loaderConfig: LoaderConfig) {
    this.loaderService.setLoaderConfig(loaderConfig);
  }
}

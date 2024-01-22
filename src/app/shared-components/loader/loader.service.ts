import { Injectable } from '@angular/core';
import { LoaderConfig } from './loader.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // private loaderConfig$ = new Subject<LoaderConfig>();
   // Breadcrumb config.
   private loaderConfig$: BehaviorSubject<LoaderConfig> =
   new BehaviorSubject({
    status: <boolean> false
   });

  constructor() { }

  setLoaderConfig(loaderDisplayStatus: LoaderConfig) {
    this.loaderConfig$.next(loaderDisplayStatus);
  }

  getLoaderConfig(): Observable<LoaderConfig> {
    return this.loaderConfig$.asObservable();
  }
}

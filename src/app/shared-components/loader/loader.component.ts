import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { LoaderConfig } from './loader.model';

@Component({
  selector: 'papp-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  loaderConfigs!: LoaderConfig;

  constructor(private loaderService: LoaderService) {
    this.loaderService.getLoaderConfig().subscribe((config: LoaderConfig) => {
      this.loaderConfigs = config;
      // console.log("loaderConfigs",this.loaderConfigs);
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}

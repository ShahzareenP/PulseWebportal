import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataGridComponent } from './shared-components/data-grid/data-grid.component';
import { HomeComponent } from './common-component-test/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';															   
import { MatButtonModule } from '@angular/material/button';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { CommonComponentTestComponent } from './common-component-test/common-component-test.component';
import { PageHeaderModule } from './shared-components/page-header/page-header.module';
import { PageFooterModule } from './shared-components/page-footer/page-footer.module';
import { BreadcrumbModule } from './shared-components/breadcrumb/breadcrumb.module';
import { ToastModule } from './shared-components/toast/toast.module';
import { DialogPopupModule } from './shared-components/dialog-popup/dialog-popup.module';
import { PaginatorModule } from './shared-components/paginator/paginator.module';
import { LoaderModule } from './shared-components/loader/loader.module';
import { ToggleSliderModule } from './shared-components/toggle-slider/toggle-slider.module';
import { AutoCompleteModule } from './shared-components/auto-complete/auto-complete.module';
import { WidgetsModule } from './shared-components/widgets/widgets.module';
import { BarChartComponent } from './shared-components/bar-chart/bar-chart.component';
import { PieChartComponent } from './shared-components/pie-chart/pie-chart.component';
import { SwitchTabViewModule } from './shared-components/switch-tab-view/switch-tab-view.module';
import { CardViewModule } from './shared-components/card-view/card-view.module';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    HomeComponent,
    CommonComponentTestComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
	  MatCheckboxModule,		  
    MatButtonModule,
    SharedComponentsModule,
    PageHeaderModule,
    PageFooterModule,
    BreadcrumbModule,
    ToastModule,
    DialogPopupModule,
    PaginatorModule,
    LoaderModule,
    ToggleSliderModule,
    AutoCompleteModule,
    WidgetsModule,
    SwitchTabViewModule,
    CardViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ToastService } from '../shared-components/toast/toast.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from '../shared-components/dialog-popup/dialog-popup.component';
import {
  PaginatorEventData,
  PaginationConfig,
} from '../shared-components/paginator/paginator.model';
import { PaginatorService } from '../shared-components/paginator/paginator.service';
import { MatTableDataSource } from '@angular/material/table';
import { AppUtil } from '../util/app-util';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DialogPopupService } from '../shared-components/dialog-popup/dialog-popup.service';
import { widgetsConfig } from '../shared-components/widgets/widgets.model';
import { BarChartData } from '../shared-components/bar-chart/bar-chart.model';
import { MatCardData } from '../shared-components/card-view/card-view.model';

export interface UserData {
  checked: boolean;
  name: string;
  progress: number;
  color: string;
  startDate: string;
}

  const  DATENOW: string[] = ['1/12/2023', '12/17/2022', '8/11/2021', '10/1/2022', '9/9/2023', '12/19/2020', '12/11/2020', '10/2/2021']


/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  jobtitle: string;
  department: string;
}


const STATISTICS: any[] = [
 {
   0: 50,
   1: 0,
   2: 150
 },

{
0: 706,
1: 706,
2: 604,

},
{
  0: 34,
  1: 920,
  2: 701,
},
{
  0: 45,
  1: 30,
  2: 708,
},
{
  0: 800,
  1: 802,
  2: 952,

},
];


@Component({
  selector: 'papp-common-component-test',
  templateUrl: './common-component-test.component.html',
  styleUrls: ['./common-component-test.component.scss'],
})
export class CommonComponentTestComponent implements OnInit, OnDestroy {

  columns = [ { key: 'checked', label: '', searchYN: false, sortYN: false, checkedYN: true},
             { key: 'name', label: 'Name', searchYN: true, sortYN: true},  
             { key: 'progress', label: 'Progress', searchYN: true, sortYN: true },  
             { key: 'color', label: 'Color', searchYN: true, sortYN: true},   
             { key: 'startDate', label: 'Start Date', searchYN: false, sortYN: true,  dateYN: true},
             { key: 'action', label: '', searchYN: false, sortYN: false, actionYN: true},
          ];
  data: any[] = [];

  title = 'pulse-app';

  pageHeaderConfig = {
    title: 'Pulse Application Header',
  };

  pageFooterConfig = {
    footerText: 'Pulse Application Footer',
  };

  paginationConfig: PaginationConfig = {
    totalRecords: 10,
    recordsPerPage: 3,
    displayPagination: true,
    pageOptions: [3,6,9]
  };

  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'jobtitle',
    'department',
  ];

  EmpData: Employee[] = [
    {
      id: 1,
      firstname: 'Mellie',
      lastname: 'Gabbott',
      email: 'mgabbott0@indiatimes.com',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
    },
    {
      id: 2,
      firstname: 'Yehudi',
      lastname: 'Ainsby',
      email: 'yainsby1@w3.org',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
    },
    {
      id: 3,
      firstname: 'Noellyn',
      lastname: 'Primett',
      email: 'nprimett2@ning.com',
      gender: 'Female',
      department: 'Human Resources',
      jobtitle: 'Project Manager',
    },
    {
      id: 4,
      firstname: 'Stefanie',
      lastname: 'Yurenin',
      email: 'syurenin3@boston.com',
      gender: 'Female',
      department: 'Marketing',
      jobtitle: 'Senior officer',
    },
    {
      id: 5,
      firstname: 'Stormi',
      lastname: "O'Lunny",
      email: 'solunny4@patch.com',
      gender: 'Female',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
    },
    {
      id: 6,
      firstname: 'Keelia',
      lastname: 'Giraudy',
      email: 'kgiraudy5@nba.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
    },
    {
      id: 7,
      firstname: 'Ikey',
      lastname: 'Laight',
      email: 'ilaight6@wiley.com',
      gender: 'Male',
      department: 'Support',
      jobtitle: 'Support Analyst',
    },
    {
      id: 8,
      firstname: 'Adrianna',
      lastname: 'Ruddom',
      email: 'aruddom7@seattletimes.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
    },
    {
      id: 9,
      firstname: 'Dionysus',
      lastname: 'McCory',
      email: 'dmccory8@ox.ac.uk',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
    },
    {
      id: 10,
      firstname: 'Claybourne',
      lastname: 'Shellard',
      email: 'cshellard9@rediff.com',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
    },
  ];
  
  barchartdata: BarChartData = {
    data: STATISTICS,
    height: 400,
    xAxisLabel: 'Roll',
    yAxisLabel: 'Revenue',
    textColor: '#000000',
    legends: ['indzones', 'totalplot', 'allotted'],
    unitLabel: '$',
    widthofBar: 0.2,
    horizontalVerticalYN: 0,
    chartName: 'Bar chart',
    chartFontSize: '16px',
    strokeColor: '#111111',
    strokePlacement: 150,
    strokeDashed: 0
  }

  dataSource: any;
  paginationTableData!: any[];
  toggleValue!: any;
  subscriptions: Array<Subscription> = [];
  loaderFinish: boolean = false;

  options: Array<any> = [
    { name: 'option1' },
    { name: 'option2' },
    { name: 'option3' },
    { name: 'option4' },
    { name: 'option4' },
  ];

  autoCompleteConfig = {
    options: this.options,
    targetKey: 'name',
  };

  toggleConfig = {
    toggleLabel: 'Pulse App',
    defaultToggleValue: true,
  };

  toggleConfig1 = {
    toggleLabel: 'Pulse App1',
    defaultToggleValue: true,
  };
  toggleValue1: any;

  widgetConfig!: widgetsConfig;

  pieData = {
    data: [
      {grade: 'A+', studnets: 50},
      {grade: 'A', studnets: 18},
      {grade: 'B',studnets: 10},
      {grade: 'C', studnets: 5},
      {grade: 'D', studnets: 5},
      {grade: 'Fail', studnets: 12},
  ],
  // width: 750,
  // height: 600,
  //     radius: Math.min(600, 750) / 4,
    chartTargetKey: 'studnets',
    chartColorKey: 'grade',
    // donutConfig: {
    //   showDonut : true,
    //   innerRadius: 100,
    //   outerRadius:  Math.min(600, 750) / 4 - 80,
    //   textInsideDonut: [
    //     {
    //       label: '$350m',
    //       styleClass: 'risk-profile'
    //     },
    //     {
    //       label: 'Total Limit',
    //       styleClass: 'risk-level'
    //     }
    // ]
    // },
    // legendsConfig:{
    //   showLegend: false
    // },
    labelUnit: '%'
  }
  activeTabName: any = 'tab1';

  tabConfig = {
    tabs : [{ name: 'tab1' }, { name: 'tab2' }, { name: 'tab3' }],
  }
  // tabConfig = {
  //   tabs : [{ name: 'alarm_add' }, { name: 'alarm' }],
  // }

  cardContent: MatCardData = {
    title: 'Market Overview'
  }

  constructor(
    private toastService: ToastService,
    public dialog: MatDialog,
    private paginatorService: PaginatorService,
    private appUtil: AppUtil,
    private router: Router,
    public dialogService: DialogPopupService
  ) {
    // this.paginatorService.setPaginatorConfig(this.paginationConfig);

    this.dataSource = new MatTableDataSource(this.EmpData);
    // this.preparePaginationData(this.paginationConfig?.recordsPerPage ?? 2);

    this.setLoaderState(true);

    this.prepareBreadcrumbConfig();

    this.subscriptions?.push(
      this.appUtil?.getBreadcrumbClickEvent()?.subscribe((response) => {
        if (response?.link === '/contacts') {
          this.router?.navigateByUrl(response?.link);
        } else if (response?.link === '/home')
          this.router?.navigateByUrl(response?.link);
      })
    );
  }

  ngOnInit() {
    this.data = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    setTimeout(() => {
      this.setLoaderState(false);
      this.loaderFinish = true;
    }, 200);

    this.widgetConfig = {
      tabViewConfig: [
        { tabName: 'CASH' },
        { tabName: 'TOM' },
        { tabName: 'SPOT' },
        { tabName: 'FWD' },
      ],
      isShowDatePicker: true,
      headerDropDownData: [
        {
          name: 'AUD/USD',
          short: 'AUD/USD',
        },
        {
          name: 'EUR/INR',
          short: 'EUR/INR',
        },
        {
          name: 'EUR/USD',
          short: 'EUR/USD',
        },
        {
          name: 'USD/INR',
          short: 'USD/INR',
        },
      ],
      headerDropDownKey: 'name',
    } as widgetsConfig;
  }

  onClickSuccessToaster() {
    this.toastService?.success(
      'Pulse Application Success Toaster',
      'left',
      'top'
    );
  }

  onClickFailedToaster() {
    this.toastService?.error(
      'Pulse Application Failed Toaster',
      'center',
      'bottom'
    );
  }

  onClickInfoToaster() {
    this.toastService?.info('Pulse Application Info Toaster', 'right', 'top');
  }

  openDialog(): void {
    this.dialogService.openDialog({
      message: 'Test',
      processButtonLabel: 'Yes',
      cancelButtonLabel: 'No',
    });
    // const dialogRef = this.dialog.open(DialogPopupComponent, {
    //   width: '500px',
    //   height: '100px',
    //   data: { message: 'This is testing of dialog' },
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('Dialog is closed');
    // });
  }

  //client side pagination
  preparePaginationData(pageSize: any) {
    // console.log("pageSize",pageSize);

    let recordsPerPage = pageSize;
    let i = 0;
    // console.log("this.dataSource?.filteredData", this.dataSource?.filteredData);
    this.paginationTableData = [];

    this.dataSource?.filteredData?.forEach(() => {
      //to break the loop
      if (i >= this.dataSource?.filteredData?.length) {
        return;
      }
      //data will contain an array of size recordsPerPage
      const data = this.dataSource?.filteredData?.slice(i, i + recordsPerPage);
      // console.log("data", data);
      //this.paginationTableData will contain arrays of recordsPerPage
      this.paginationTableData?.push(data);
      i += recordsPerPage;
    });
    // console.log("this.paginationTableData", this.paginationTableData);
    this.dataSource = new MatTableDataSource<any>(this.paginationTableData[0]);
    // console.log("this.dataSource", this.dataSource);
  }

  onPaginatorChange(event: PaginatorEventData) {
    //if records per page value changes
    this.dataSource = new MatTableDataSource(this.EmpData);
    console.log('Pagination Event Data:', event);
    this.preparePaginationData(event?.pageSize);

    this.dataSource = new MatTableDataSource<any>(
      this.paginationTableData[event?.pageIndex]
    );
  }

  onTableAction(event: any) {
    console.log('event', event);
  }

  setLoaderState(status: boolean) {
    this.appUtil.setLoaderConfig({
      status: status,
      loaderURL: '../../assets/loader.gif',
    });
  }

  toggleChangeEvent(event: any) {
    this.toggleValue = event.defaultToggleValue;
  }

  toggleChangeEvent1(event: any) {
    this.toggleValue1 = event.defaultToggleValue;
  }

  /** Prepare breadcrumb config. */
  prepareBreadcrumbConfig() {
    let breadcrumbConfig = [];
    breadcrumbConfig?.push(
      {
        label: 'Home',
        link: '/home',
      },
      {
        label: 'Contact',
        link: '/contacts',
      }
    );
    this.appUtil?.setBreadcrumbConfig(breadcrumbConfig);
  }


  selectedTab(event:any) {
    this.activeTabName = event?.activeTabName;
    console.log("this.activeTabName",this.activeTabName);
  }

  ngOnDestroy(): void {}
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    checked: false,
    name: name,
    progress: Math.round(Math.random() * 100),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    startDate: DATENOW[Math.round(Math.random() * (DATENOW.length - 1))]
  };
} 
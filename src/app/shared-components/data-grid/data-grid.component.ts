import {  Component, EventEmitter, Input, OnChanges,  Output, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from 'src/app/common-component-test/common-component-test.component';
import {SelectionModel} from '@angular/cdk/collections';
import { PaginationConfig, PaginatorEventData } from '../paginator/paginator.model';
import { PaginatorService } from '../paginator/paginator.service';

@Component({
  selector: 'papp-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnChanges, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  @Output() action: EventEmitter<any> = new EventEmitter<any>()
  tableData!: any[];
  @Input() set columns(cols: Array<any>) {
    this.initColumns = cols;
    this.displayedColumns =  cols.map(col => col.key);
  }
  @Input() set dataset(dataset: Array<any>) {
    this.dataSource = new MatTableDataSource(dataset);
    this.tableData = dataset;
  }

  
  paginationConfig: PaginationConfig | undefined;

  paginationTableData!: any[];
  dataSource!: MatTableDataSource<UserData>;
   displayedColumns: any[] =  [];
   initColumns: any[] = [];
   selection = new SelectionModel<any>(true, []);

   constructor( private paginatorService: PaginatorService) {
   
   }

   ngOnInit() {
    this.preparePaginationData(10);
   }


  ngOnChanges(): void {
    this.paginationConfig = {
      totalRecords: this.dataSource.data.length,
      recordsPerPage: 10,
      displayPagination: true,
      pageOptions: [10,50,100]
    };
    this.paginatorService.setPaginatorConfig(this.paginationConfig);
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
    
  }


  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (item: any, property: string) => {
      if (property === 'startDate') {
          return new Date(item.startDate);
        }
        else  {
          return item[property];
        }
    }
  }

  applyFilter(filterValue: any, columnName: string) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
    this.dataSource.filterPredicate = this.createFilter(columnName);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Custom filter predicate for each column
  createFilter(columnName: string): (data: any, filter: string) => boolean {
    return (data: any, filter: string) => {
      const columnValue = data[columnName];
      return columnValue.toString().toLowerCase().includes(filter.toString());
    };
  }

  getColumn(column: any): boolean {
    return !!((!column.dateYN && !column.checkedYN));
  }

  editRow() {
    this.action.emit('editRow');
  }

  deleteRows() {
    this.action.emit('deleteRows');
  }

  splitRows() {
    this.action.emit('splitRows');
  }

  mergeRows() {
    this.action.emit('mergeRows');
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.name));
  }

  onPaginatorChange(event: PaginatorEventData) {
    this.dataSource = new MatTableDataSource(this.tableData);
    //if records per page value changes
    this.preparePaginationData(event?.pageSize);

    this.dataSource = new MatTableDataSource<any>(
      this.paginationTableData[event?.pageIndex]
    );
  }

  preparePaginationData(pageSize: any) {
    let recordsPerPage = pageSize;
    let i = 0;
  
    this.paginationTableData = [];

    this.dataSource?.data?.forEach(() => {
      
      if (i >= this.dataSource?.data?.length) {
        return;
      }
      
      const data = this.dataSource?.data?.slice(i, i + recordsPerPage);
   
      this.paginationTableData?.push(data);
      i += recordsPerPage;
    });
    
    this.dataSource = new MatTableDataSource<any>(this.paginationTableData[0]);
  }

 
}
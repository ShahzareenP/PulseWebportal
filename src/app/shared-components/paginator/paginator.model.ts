export interface PaginationConfig {
    totalRecords: number;
    recordsPerPage?: number;
    displayPagination?: boolean;
    pageOptions?: number[]
  }

  export interface PaginatorEventData {
    pageIndex: number;
    previousPageIndex?: number;
    pageSize: number;
    length: number;
  }
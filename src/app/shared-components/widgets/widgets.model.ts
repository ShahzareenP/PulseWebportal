export interface widgetsConfig {
    id:string,
    tabViewConfig: TabConfig[],
    isShowDatePicker: boolean;
    headerDropDownData: any[];
    headerDropDownKey: string;
    showDropDownInHeader?: boolean;
    headerLabel?: string;
    showAmountInput?: boolean;
}

export interface TabConfig {
    tabName: string;
    totalRecords?: number;
  }
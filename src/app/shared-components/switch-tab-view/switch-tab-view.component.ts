import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabConfig } from './switch-tab-view.model';

@Component({
  selector: 'papp-switch-tab-view',
  templateUrl: './switch-tab-view.component.html',
  styleUrls: ['./switch-tab-view.component.scss'],
})
export class SwitchTabViewComponent implements OnInit {
  
  @Input() tabConfig!: TabConfig;
  @Output() selectedTab: EventEmitter<any> = new EventEmitter<any>();
  
  activeTab!:string;
  tabWithIcons!:boolean;

  ngOnInit() {
    this.activeTab = this.tabConfig?.activeTab ?? this.tabConfig?.tabs[0]?.name;
    this.tabWithIcons = this.tabConfig?.tabWithIcons ?? false;
  }

  tabChange(tabName: string) {
    this.activeTab = tabName;
    let tabChangeEvent = {
      activeTabName: tabName
    }
    this.selectedTab?.emit(tabChangeEvent);
  }
}

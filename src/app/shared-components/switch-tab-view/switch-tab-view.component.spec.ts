import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTabViewComponent } from './switch-tab-view.component';
import { By } from '@angular/platform-browser';

describe('SwitchTabViewComponent', () => {
  let component: SwitchTabViewComponent;
  let fixture: ComponentFixture<SwitchTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchTabViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchTabViewComponent);
    component = fixture.componentInstance;
    component.tabConfig = {
      tabs: [{ name: 'tab1' }, { name: 'tab2' }]
    };
    component.activeTab = component.tabConfig.tabs[0].name;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test click', () => {
    jest.spyOn(component, 'tabChange');
    const el = fixture.debugElement.query(By.css('li')).nativeElement.click();
    expect(component.tabChange).toHaveBeenCalled();
  });

  it('should test click', () => {
    fixture.detectChanges();
    jest.spyOn(component, 'tabChange');
    const el = fixture.debugElement.query(By.css('li')).nativeElement.click();
    expect(component.tabChange).toHaveBeenCalled();
  });

  it('should test click for tabs with icons', () => {
    component.tabConfig = {
      tabs: [{ name: 'alarm' }, { name: 'alarm_add' }]
    };
    component.activeTab = component.tabConfig.tabs[0].name;
    fixture.detectChanges();
    jest.spyOn(component, 'tabChange');
    const el = fixture.debugElement.query(By.css('li')).nativeElement.click();
    expect(component.tabChange).toHaveBeenCalled();
  });
});

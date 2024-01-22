import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { SharedComponentsModule } from '../shared-components.module';
import { AppUtil } from 'src/app/util/app-util';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ],
      imports: [SharedComponentsModule,AppUtil],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check onBreadcrumbClick',()=>{
    component.onBreadcrumbClick({
      label: 'Home',
      link: '/home',
    })
  })
});

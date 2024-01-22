import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';
import { SharedComponentsModule } from '../shared-components.module';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
      imports: [SharedComponentsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;

    component.pageEvent = {
      pageIndex: 0,
      pageSize: 1,
      length: 10,
    };
    component.totalPages = Math.ceil(component.pageEvent?.length / 2);
    component.paginationConfig = {
      totalRecords: 10,
      recordsPerPage: 2,
      displayPagination: true,
    };

    component.subscriptions = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checks pagination change event', () => {
    component.onPaginatorChange({
      previousPageIndex: 0,
      pageIndex: 1,
      pageSize: 2,
      length: 10,
    });
  });

  it('checks navigateToSpecificPage method scenario 1', () => {
    let scenario1 = {
      target: {
        value: 15,
      },
    };

    component.navigateToSpecificPage(scenario1);
  });

  it('checks navigateToSpecificPage method scenario 2', () => {
    let scenario2 = {
      target: {
        value: -1,
      },
    };
    component.navigateToSpecificPage(scenario2);
  });
});

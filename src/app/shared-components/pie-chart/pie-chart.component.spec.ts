import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    component.pieChartConfig = {
      data: [
        {grade: 'A+', studnets: 50},
        {grade: 'A', studnets: 18},
        {grade: 'B',studnets: 10},
        {grade: 'C', studnets: 5},
        {grade: 'D', studnets: 5},
        {grade: 'Fail', studnets: 12},
    ],
      chartTargetKey: 'studnets',
      chartColorKey: 'grade',
    }

    component?.initValues();
    component?.createSvg();
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //with default values
  it('should check pie chart method scenario 1', () => {
    component.pieChartConfig = {
      data: [
        {grade: 'A+', studnets: 50},
        {grade: 'A', studnets: 18},
        {grade: 'B',studnets: 10},
        {grade: 'C', studnets: 5},
        {grade: 'D', studnets: 5},
    ],
      chartTargetKey: 'studnets',
      chartColorKey: 'grade',
    }
    fixture.detectChanges();
    
    component?.drawChart();
  });

  //all the config values are provided
  it('should check pie chart method scenario 2', () => {
    component.pieChartConfig = {
      data: [
        {grade: 'A+', studnets: 50},
        {grade: 'A', studnets: 18},
        {grade: 'B',studnets: 10},
        {grade: 'C', studnets: 5},
        {grade: 'D', studnets: 5},
        {grade: 'Fail', studnets: 12},
    ],
    width: 750,
    height: 600,
        radius: Math.min(600, 750) / 4,
      style:{
        sectionColors: [
          '#FFA500',
          '#00FF00',
          '#FF0000',
          '#6b486b',
          '#FF00FF',
          '#d0743c',
        ],
        strokeColor: 'black',
        strokeWidth: '1px'
      },
      chartTargetKey: 'studnets',
      chartColorKey: 'grade',
      legendsConfig: {
        legendsIconWidth: 8,
        legendsIconHeight: 8,
        legendsTextFontSize: 10,
      }
    }
    fixture.detectChanges();
    
    component?.drawChart();
  });


  //provided some of the config values rest will be default
  it('should check pie chart method scenario 3', () => {
    component.pieChartConfig = {
      data: [
      ],
      chartTargetKey: 'studnets',
      chartColorKey: 'grade',
      legendsConfig:{
        legendsIconHeight: 8,
        legendsIconWidth: 8,
        legendsTextFontSize: 10
      }

    }
    fixture.detectChanges();
    
    component?.drawChart();
  });

  //test case for donut chart
  it('should check pie chart method scenario 3', () => {
    component.pieChartConfig = {
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
      donutConfig: {
        showDonut : true,
        innerRadius: 100,
        outerRadius:  Math.min(600, 750) / 4 - 80,
        textInsideDonut: [
          {
            label: '$350m',
            styleClass: 'risk-profile'
          },
          {
            label: 'Total Limit',
            styleClass: 'risk-level'
          }
      ]
      },
      // legendsConfig:{
      //   showLegend: false
      // },
      labelUnit: '%'
    }
    fixture.detectChanges();
    
    component?.drawChart();
  });

  it('should trigger onResize method when window is resized', () => {
    const spyOnResize = jest.spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });
});

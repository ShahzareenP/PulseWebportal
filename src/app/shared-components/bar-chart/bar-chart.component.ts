import { Component, Input, ViewChild, ElementRef, OnChanges, ViewEncapsulation, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { BarChartData } from './bar-chart.model';
import { CHART_COLORS } from '../colors.constant';

@Component({
  selector: 'papp-bar-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'
]
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('barChart')
  private chartContainer: ElementRef | undefined;
  
  @Input()
  barchartdata: BarChartData | undefined;

  keys: string | undefined;
  colors: any;
  x0: any;
  x1: any;
  y: any;
  tooltip: any;
  svg: any;
  chart: any;
  xAxis: any;
  yAxis: any;
  barNames: any;
  legend: any;
  width: number  = 520;
  height: number = 420;
  colorsRange: string[] | undefined = CHART_COLORS;
  margin: any;
  marginV = { top: 80, right: 50, bottom: 80, left: 50 };
  marginH = { top: 80, right: 50, bottom: 80, left: 20 };
  unitLabel = '';
  spaceBetweenGroupBar = 0.3;
  widthofBar = 0.2;
  textColor = '#000000';
  horizontalVerticalYN = 1;


  ngAfterViewInit(): void {
    if (!this.barchartdata) { return; }

    this.width =  this.barchartdata.width ?? this.width;
    this.height =   this.barchartdata.height ?? this.height;
    this.colorsRange = this.barchartdata.colors ??  this.colorsRange;
    this.horizontalVerticalYN = this.barchartdata.horizontalVerticalYN ?? this.horizontalVerticalYN;
    this.margin = this.barchartdata.margin ?? this.horizontalVerticalYN ? this.marginV : this.marginH;
    this.unitLabel = this.barchartdata.unitLabel ?? this.unitLabel;
    this.spaceBetweenGroupBar = this.barchartdata.spaceBetweenGroupBar ?? this.spaceBetweenGroupBar;
    this.widthofBar = this.barchartdata.widthofBar ?? this.widthofBar;
    this.textColor = this.barchartdata.textColor ?? this.textColor;

    this.keys = Object.keys(this.barchartdata.data[0])[0];
    this.colors = d3.scaleOrdinal().range(this.colorsRange!);

    this.initScales();
    this.initSvg();
    this.drawChart();
    this.drawAxis();
  }

  private initScales() {

    const x0range = this.horizontalVerticalYN ? this.width : this.height;


      this.x0 = d3
        .scaleBand() 
        .domain(this.barchartdata!.data.map((d) => (d as any)[this.keys!]))
        .rangeRound([0, x0range])
        .padding(this.spaceBetweenGroupBar); // increase / decrease space between group bars 

        this.x1 = d3
        .scaleBand()
        .domain(this.keys!)
        .rangeRound([0, this.x0.bandwidth()])
        .padding(this.widthofBar); // increase / decrease width or space between individual bars 
        
        if(this.horizontalVerticalYN)
        {
          this.y = d3
          .scaleLinear()
          .range([this.height, 0])
          .domain([0, d3.max(this.barchartdata!.data, (d) => d3.max(this.keys!, (key) => (d as any)[key]))])
          .nice();

        } else {

          this.y = d3
          .scaleLinear()
          .range([0, this.width])
          .domain([0, d3.max(this.barchartdata!.data, (d) => d3.max(this.keys!, (key) => (d as any)[key]))])
          .nice();

        }
     
  }

  drawAxisHorizontal(): void {
    this.xAxis = d3.axisBottom(this.x0).tickSize(0).tickValues('');
    
    this.yAxis = d3
      .axisLeft(this.y)
      .ticks(7)
      .tickFormat((d, i) => {
        return this.unitLabel + d;
     });

    this.chart
      .append('g')
      .attr('transform', 'translate(0,' + this.barchartdata!.height + ')')
      .call(this.xAxis)
      .append('text')
      .attr('x', this.width / 2)
      .attr('y', 30)
      .style('fill', this.textColor)
      .text(this.barchartdata?.xAxisLabel);
 
      this.chart
      .append('g')
      .attr('class', 'y axis')
      .call(this.yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - this.margin.left)
      .attr('x', 0 - this.height / 2)
      .attr('dy', '.71em')
      .style('text-anchor', 'middle')
      .style('fill', this.textColor)
      .text(this.barchartdata?.yAxisLabel);

      const state = this.chart
        .selectAll('.state')
        .data(this.barchartdata!.data)
        .enter()
        .append('g')
        .attr('class', 'state')
        .attr('transform', (d: { [x: string]: any; }) => {
          return 'translate(' + this.x0(d[this.keys!]) + ',0)';
        });

        
        this.chart.append("text")
        .attr("x",this.width/2)
        .attr("y", -20)
        .attr("text-anchor", "middle")
        .style("font-size", this.barchartdata?.chartFontSize)
        .text(this.barchartdata?.chartName);


        this.chart.append('line')
        .attr("class", "targetgoal")
        .attr("x1", 0)     // x position of the first end of the line
        .attr("y1", this.barchartdata?.strokePlacement)      // y position of the first end of the line
        .attr("x2",this.width)     // x position of the second end of the line
        .attr("y2", this.barchartdata?.strokePlacement)   // y position of the second end of the line
        .style("stroke", this.barchartdata?.strokeColor)
        .attr('stroke-dasharray', this.barchartdata?.strokeDashed)

            
        
        state
        .selectAll('rect')
        .data((d: { element: any; }) => {
          return d.element;
        })
        .enter()
        .append('rect')
        .attr('width', this.x1.bandwidth())
        .attr('x', (d: { name: any; }) => {
          return this.x1(d.name);
        })
        .attr('y', (d: { value: any; }) => {
          return this.y(d.value || 0);
        })
        .attr('height', (d: { value: any; }) => {
          return this.height - this.y(d.value || 0);
        })
        .style('fill', (d: { name: any; }, i: any) => {
         
          return this.colors(d.name);
         
        });

        
  
        state
        .selectAll("text")
        .data((d: { element: any; }) => {
          return d.element;
        })
        .enter().append("text")
        .attr("class","bar-chart-text")
        .attr('x', (d: { name: any; }) => {
          return this.x1(d.name);
        })
        .attr('y', (d: { value: any; }) => {
          return this.y(d.value || 0);
        })
        .text((d: { value: any; }) => { return d.value ? this.unitLabel + d.value : '' })
        .style('fill', this.textColor);
          
      this.legend = this.chart
        .append('g')
        .attr('text-anchor', 'end')
        .attr('font-family', 'sans-serif')
        .attr('style', 'transform: translate(-'+ this.width / 2 + 'px , '+ parseInt(this.height + this.margin.right, 10) +'px)')
        .attr('font-size', 10)
        .selectAll('g')
        .data(this.barchartdata?.legends)
        .enter()
        .append('g')
        .style('fill', this.textColor)
        .attr('transform', function (d: any, i: number) {
          return 'translate(' + i * 70 + ',0)';
        });
       
      
      this.legend
        .append('rect')
        .attr('x', this.width - 15)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', d3.scaleOrdinal().range(this.colorsRange!));
  
      this.legend
        .append('text')
        .attr('x', this.width - 24)
        .attr('y', 9.5)
        .attr('dy', '0.5em')
        .text(function (d: any) {
          return d;
        });

  }

  drawAxisVertical(): void {
    this.xAxis = d3.axisBottom(this.y)
    .ticks(7)
    .tickFormat((d, i) => {
      return this.unitLabel + d;
   });
    
    this.yAxis = d3
      .axisLeft( this.x0).tickSize(0).tickValues('') 

    this.chart
      .append('g')
      .attr('transform', 'translate(0,' + this.barchartdata!.height + ')')
      .call(this.xAxis)
      .append('text')
      .attr('x', this.height / 2)
      .attr('y', 30)
      .style('fill', this.textColor)
      .text(this.barchartdata?.yAxisLabel);
 
      this.chart
      .append('g')
      .attr('class', 'y axis')
      .call(this.yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -15)
      .attr('x', 0 - this.width / 2)
      .attr('dy', '.71em')
      .style('text-anchor', 'middle')
      .style('fill', this.textColor)
      .text(this.barchartdata?.xAxisLabel);

      const state = this.chart
        .selectAll('.state')
        .data(this.barchartdata!.data)
        .enter()
        .append('g')
        .attr('class', 'state')
        .attr('transform', (d: { [x: string]: any; }) => {
          return 'translate(0, ' +  this.x0(d[this.keys!]) +')';
        });


        this.chart.append("text")
        .attr("x",this.width/2)
        .attr("y", -20)
        .attr("text-anchor", "middle")
        .style("font-size", this.barchartdata?.chartFontSize)
        .text(this.barchartdata?.chartName);


        this.chart.append('line')
        .attr("class", "targetgoal")
        .attr("x1", this.barchartdata?.strokePlacement)     // x position of the first end of the line
        .attr("y1", 0)      // y position of the first end of the line
        .attr("x2", this.barchartdata?.strokePlacement)     // x position of the second end of the line
        .attr("y2", this.height)   // y position of the second end of the line
        .style("stroke", this.barchartdata?.strokeColor)
        .attr('stroke-dasharray', this.barchartdata?.strokeDashed);
            
        state
        .selectAll('rect')
        .data((d: { element: any; }) => {
          return d.element;
        })
        .enter()
        .append('rect')
        .attr('height', this.x1.bandwidth())
        .attr('y', (d: { name: any; }) => {
          return  this.x1(d.name);
        })
        .attr('x',  0)
        .attr('width', (d: { value: any; }) => {
          return this.y(d.value || 0);
        })
        .style('fill', (d: { name: any; }, i: any) => {
          return this.colors(d.name);
        })
  
        state
        .selectAll("text")
        .data((d: { element: any; }) => {
          return d.element;
        })
        .enter().append("text")
        .attr("class","bar-chart-text")
        .attr('x', (d: { value: any; }) => {
          return  this.y(d.value || 0) + 5 ;
        })
        .attr('y',  (d: { name: any; }) => {
          return  this.x1(d.name) + 10;
        })
        .text((d: { value: any; }) => { return d.value ? this.unitLabel + d.value : '' })
        .style('fill', this.textColor);
          
      this.legend = this.chart
        .append('g')
        .attr('style', 'transform: translate(-'+ this.width / 2 + 'px , '+ + parseInt(this.height + this.margin.right, 10) +'px)')
        .attr('text-anchor', 'end')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 10)
        .selectAll('g')
        .data(this.barchartdata?.legends)
        .enter()
        .append('g')
        .style('fill', this.textColor)
        .attr('transform', function (d: any, i: number) {
          return 'translate(' + i * 70 + ', 0)';
        });
       
      this.legend
        .append('rect')
        .attr('x', this.width - 15)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', d3.scaleOrdinal().range(this.colorsRange!));
  
      this.legend
        .append('text')
        .attr('x', this.width - 24)
        .attr('y', 9.5)
        .attr('dy', '0.5em')
        .text(function (d: any) {
          return d;
        });
  }

  private initSvg() {

    this.svg = d3
    .select(this.chartContainer!.nativeElement)
    .append('svg')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('class', 'chart')
    .attr('width', this.width)
    .attr('height', this.height )
    .attr('viewBox', [0, 0, this.width + this.margin.left + this.margin.right, this.height + this.margin.bottom + this.margin.top]);
   

    const translateHV = this.horizontalVerticalYN ? this.margin.left + ',' + this.margin.top : this.margin.left + ',' + this.margin.bottom;
    this.chart = this.svg
      .append('g')
      .classed('chart-contents', true)
      .attr(
        'transform',
        'translate(' + translateHV + ')'
      );
  }

  private drawAxis() {
   this.horizontalVerticalYN ? this.drawAxisHorizontal() : this.drawAxisVertical()
  }

  private drawChart() {
    this.barNames = Object.keys(this.barchartdata!.data[0]).filter((key) => {
      return key;
    });

    this.barchartdata!.data.forEach((d: any) => {
      d.element = this.barNames.map((name: string | number) => {
        return { name: name, value: +d[name] };
      });
    });

    this.x0.domain(
      this.barchartdata!.data.map((d: any) => {
        return d[this.keys!];
      })
    );

    this.x1.domain(this.barNames).rangeRound([0, this.x0.bandwidth()]);

    this.y.domain([
      0,
      d3.max(this.barchartdata!.data, function (d) {
        return d3.max(d.element, function (d: {value: any}) {
          return d.value;
        });
      }),
    ]);
  }

  onResize() {
    this.drawChart();
  }

}
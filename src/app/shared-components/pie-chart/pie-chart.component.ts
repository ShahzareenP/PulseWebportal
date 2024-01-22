import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { LegendsConfig, PieData } from './pie-chart.model';
import { CHART_COLORS } from '../colors.constant';

@Component({
  selector: 'papp-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() pieChartConfig!: PieData;

  width!: number;
  height!: number;
  radius!: number;
  colorsOfSections!: string[];
  strokeColor!: string;
  strokeWidth!: string;
  legendIconPositionFromCircle!: number;

  svg: any;
  colors: any;
  legendsConfig!: LegendsConfig;
  showLegend!: boolean;
  path: any;
  arc: any;
  outerradius: any;
  showTooltip: boolean = false;

  ngOnInit(): void {
    this.initValues();
    this.createSvg();
    this.drawChart();
  }

  //init the default values
  initValues() {
    this.width = this.pieChartConfig?.width ?? 600;
    this.height = this.pieChartConfig?.height ?? 450;
    this.radius =
      this.pieChartConfig?.radius ?? Math.min(this.width, this.height) / 4;

    this.outerradius = this.pieChartConfig?.donutConfig
      ? this.pieChartConfig?.donutConfig?.outerRadius ?? this.radius - 40
      : this.radius;

    this.legendIconPositionFromCircle = this.radius - 170;

    this.colorsOfSections =
      this.pieChartConfig?.style?.sectionColors ?? CHART_COLORS;

    this.legendsConfig = this.pieChartConfig?.legendsConfig ?? {
      legendsIconHeight: 8,
      legendsIconWidth: 8,
      legendsTextFontSize: 10,
    };

    this.showLegend = this.pieChartConfig?.legendsConfig?.showLegend ?? true;

    this.colors = d3.scaleOrdinal().range(this.colorsOfSections);
    // this.colors = d3.scaleOrdinal(d3.schemeDark2);

    this.strokeColor = this.pieChartConfig?.style?.strokeColor ?? 'black';
    this.strokeWidth = this.pieChartConfig?.style?.strokeWidth ?? '1px';
  }

  createSvg(): void {
    this.svg = d3
      .select('#pie')
      .append('svg')
      .attr('viewBox', `150 50 ${this?.width} ${this?.height}`)
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
      );
  }

  drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3
      .pie()
      .sort(null)
      .value((d: any) => d[this.pieChartConfig?.chartTargetKey]);

    var data = pie(this.pieChartConfig?.data);
    //set the arc for pie chart innerRadius will be 0
    if (!this.pieChartConfig?.donutConfig) {
      this.arc = d3.arc().innerRadius(0).outerRadius(this.radius);
    } else {
      this.arc = d3
        .arc()
        .innerRadius(this.pieChartConfig?.donutConfig?.innerRadius ?? 100)
        .outerRadius(this.outerradius);
    }
    // Build the pie chart
    this.path = this.svg
      .selectAll('pieces')
      .data(data)
      .enter()
      .append('path')
      .attr('d', this.arc)
      //set colors of each section
      .style('fill', (d: any) =>
        this.colors(d.data[this.pieChartConfig?.chartColorKey])
      )
      //set stroke color
      .attr('stroke', this.strokeColor)
      //set stroke width
      .style('stroke-width', this.strokeWidth)
      .on('mouseover', (d: any) => {
        //show tooltip on mouse click
        this.mouseDownEvent(d);
      })
      .on('mouseleave', () => {
        // Hide the tooltip on mouse release
        this.mouseUpEvent();
      });

    //set labels for svg
    if (!this.pieChartConfig?.donutConfig) {
      this.setChartLabels(data);
    }

    //set text inside the donut chart
    if (this.pieChartConfig?.donutConfig) {
      this.setDonutInsideText();
    }

    //prepare legends
    if (this.showLegend) {
      this.prepareLegends();
    }
  }

  setChartLabels(data: any) {
    // Add labels
    const labelLocation = d3
      .arc()
      .outerRadius(this.radius - 20)
      .innerRadius(this.radius - 20);

    this.svg
      .selectAll('pieces')
      .data(data)
      .enter()
      .append('text')
      .text((d: any) => d.data[this.pieChartConfig?.chartTargetKey])
      .attr(
        'transform',
        (d: any) => 'translate(' + labelLocation.centroid(d) + ')'
      )
      .style('text-anchor', 'middle')
      .style('font-size', 12);
  }

  prepareLegends() {
    //add legends for svg
    var legends = this.svg
      .selectAll('.legends')
      .data(this.pieChartConfig?.data);

    //set position for legend
    var legend = legends
      .enter()
      .append('g')
      .classed('legends', true)
      .attr('transform', (d: any, i: any) => {
        let itemsPerRow = this.pieChartConfig?.data?.length / 2;
        let itemWidth = this.pieChartConfig?.donutConfig ? this.outerradius : (this.outerradius - 60);
        let itemHeight = this.pieChartConfig?.donutConfig ? this.outerradius - 50 : (this.outerradius - 90);
        
        let position =
          'translate(' +
          (i % itemsPerRow) * (itemWidth ) +
          ',' +
          Math.floor(i / itemsPerRow) * (itemHeight) +
          ')';

        return position;
      });

    //create rectangle for legends
    legend
      .append('rect') // make a matching color rect
      .attr('x', this.legendIconPositionFromCircle)
      .attr('y', this.radius + 20)
      .attr('width', this.legendsConfig?.legendsIconWidth)
      .attr('height', this.legendsConfig?.legendsIconHeight)
      .attr('fill', (d: any, i: any) => {
        return this.colorsOfSections[i];
      });

    //set text for legends
    legend
      .append('text')
      .attr('x', this.legendIconPositionFromCircle + 12)
      .attr('y', this.radius + 27)
      .text((d: any) => {
        return d[this.pieChartConfig?.chartColorKey];
      })
      .style('font-size', this.legendsConfig?.legendsTextFontSize);
  }

  setDonutInsideText() {
    let i = 0;
    this.pieChartConfig?.donutConfig?.textInsideDonut.forEach((text) => {
      let position = -0.1 + i + 'em';
      i = i + 1.5;
      this.svg
        .append('text')
        .attr('dy', `${position}`)
        .attr('class', text?.styleClass)
        .style('text-anchor', 'middle')
        .text(function (d: any) {
          return text?.label;
        });
    });
  }

  mouseDownEvent(d: any) {
    this.showTooltip = true;
    //get value
    let tooltipText =
      d?.target?.__data__?.data[this.pieChartConfig?.chartTargetKey];
    tooltipText = 'INR ' + tooltipText + 'm';
    //set tooltip position
    d3.select('#tooltip')
      .style('left', d.pageX + 10 + 'px')
      .style('top', d.pageY - 50 + 'px')
      .style('opacity', 1)
      .select('#value')
      .text(tooltipText);

    let arcOver: any = d3
      .arc()
      .innerRadius(110)
      .outerRadius(this.radius - 60);
    let key = d?.target?.__data__?.data[this.pieChartConfig?.chartColorKey];

    // highlight the piece
    // this.path
    //   .filter((da: any) => {
    //     return key === da.data[this.pieChartConfig?.chartColorKey];
    //   })
    //   .transition()
    //   .duration(100)
    //   .attr('d', arcOver);
  }

  mouseUpEvent() {
    this.showTooltip = false;
    d3.select('#tooltip').style('opacity', 0);

    this.path.transition().duration(100).attr('d', this.arc);
  }

  onResize() {
    this.drawChart();
  }
}

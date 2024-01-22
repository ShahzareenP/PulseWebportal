export interface BarChartData {
    data: any[],
    width?: number,
    height?: number,
    colors?: string[],
    margin?: ChartMargin,
    xAxisLabel?: string,
    yAxisLabel?: string,
    textColor?: string,
    legends: string[],
    unitLabel?: string,
    spaceBetweenGroupBar?: number,
    widthofBar?: number,
    horizontalVerticalYN?: number,
    chartName?: string,
    chartFontSize?: string,
    strokeColor?: string,
    strokePlacement?: number
    strokeDashed: number
}

export interface ChartMargin {
    top: number,
    right: number,
    bottom: number,
    left: number
}
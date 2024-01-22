export interface PieData {
  data: any[];
  chartColorKey: string;
  chartTargetKey: string;
  legendsConfig?: LegendsConfig;
  style?: Style;
  height?: number;
  width?: number;
  radius?: number;
  donutConfig?: DonutCofig;
  labelUnit?: string;
}

export interface Style {
  sectionColors?: string[];
  strokeColor?: string;
  strokeWidth?: string;
}

export interface LegendsConfig {
  showLegend?: boolean;
  legendsIconHeight?: number;
  legendsIconWidth?: number;
  legendsTextFontSize?: number;
}

export interface DonutCofig {
  showDonut?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  textInsideDonut: InsideText[];
}

export interface InsideText {
  label: string;
  styleClass?: string;
}
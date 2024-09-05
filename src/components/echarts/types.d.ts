// line chart
import type {
  LineSeriesOption
} from 'echarts/charts';

declare interface LineData {
  xAxis: string[],
  data: Array<LineSeriesOption> | []
}

declare interface LineChartProps {
  height?: string
  chartData?: LineData
}
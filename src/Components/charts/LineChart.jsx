import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';


const LineChartData = ({ data }) => {
    const xAxisData = data[0].map(point => point.x.getFullYear());
    const seriesData = data.map(dataset => ({
      data: dataset.map(point => point.y),
    }));
  return (
    <div>
    <LineChart
        xAxis={[{ data: xAxisData }]}
        series={seriesData}
        width={500}
        height={300}
      />
    </div>
  )
}

export default LineChartData
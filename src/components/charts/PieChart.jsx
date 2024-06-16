import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const PieChartData = ({ data }) => {
    const transformedData = data.map((item, index) => ({
        id: index,
        value: item.y,
        label: item.x,
      }));
  return (
    <div>
      <PieChart
        series={[
          {
            data: transformedData,
          },
        ]}
        width={400}
        height={200}
      />

    </div>
  )
}

export default PieChartData
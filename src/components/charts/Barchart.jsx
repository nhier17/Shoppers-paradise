import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const income = {
    data: [2, 3, 1, 4, 5],
    label: 'Income',
  };
  const expense = {
    data: [3, 1, 4, 2, 1],
    label: 'Expense',
  };
  const profit = {
    data: [3, 2, 4, 5, 1],
    label: 'Profit',
  };

const BarChartData = () => {
  return (
    <div>
   <BarChart
      width={400}
      height={300}
      series={[
        { ...income, stack: 'total' },
        { ...expense, stack: 'total' },
        { ...profit, stack: 'total' },
      ]}
    />
    </div>
  )
}

export default BarChartData
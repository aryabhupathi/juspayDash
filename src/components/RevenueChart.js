// import { LineChart } from '@mui/x-charts';

// const months = [1,2,3,4,5,6];
// const currentWeekData = [12, 8, 10, 15, 22, 20];
// const previousWeekData = [10, 18, 13, 11, 18, 25];

// export function RevenueChart() {
//   return (
//     <LineChart
//       xAxis={[{ data: months, label: 'Month' }]}  // Must match data length
//       series={[
//         { label: 'Current Week', data: currentWeekData, color: 'black' },
//         { label: 'Previous Week', data: previousWeekData, color: '#1976d2' },
//       ]}
//       height={320}
//       showLegend
//       margin={{ left: 60, right: 20, top: 60, bottom: 40 }}
//     />
//   );
// }


import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';

// Pie chart data
const salesData = [
  { label: 'Direct', value: 300.56, color: '#232931' },
  { label: 'Affiliate', value: 135.18, color: '#baf6c3' },
  { label: 'Sponsored', value: 154.02, color: '#a3bafa' },
  { label: 'E-mail', value: 48.96, color: '#e8eefc' },
];

// Percentage for direct sales (example, could be dynamic)
const directPercent = ((salesData[0].value / salesData.reduce((acc, cur) => acc + cur.value, 0)) * 100).toFixed(1);

export function RevenueChart() {
  return (
    <Box sx={{ background: "#f8f9fa", width: 300, p: 3, borderRadius: 3 }}>
      <Box sx={{ fontSize: 20, fontWeight: 600, mb: 2 }}>Total Sales</Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Box sx={{ position: 'relative', width: 160, height: 160 }}>
          <PieChart
            series={[
              {
                innerRadius: 70,
                outerRadius: 80,
                data: salesData,
                arcLabel: null, // hide default arc labels
                highlightScope: { faded: 'global', highlighted: 'item' },
              },
            ]}
            colors={salesData.map(d => d.color)}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            width={160}
            height={160}
          />
          {/* Overlay percentage label centered on donut */}
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#232931',
            color: 'white',
            borderRadius: 2,
            px: 2,
            py: 0.5,
            fontWeight: 600,
            fontSize: 18,
          }}>
            {directPercent}%
          </Box>
        </Box>
      </Box>
      {/* Custom Legend */}
      <Box>
        {salesData.map((item, idx) => (
          <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                background: item.color,
                borderRadius: '50%',
                mr: 2,
                border: item.label === "Direct" ? 'none' : '1px solid #bfcce2',
              }}
            />
            <Box sx={{ flexGrow: 1, fontWeight: item.label === "Direct" ? 600 : 500 }}>
              {item.label}
            </Box>
            <Box sx={{ fontWeight: 500 }}>${item.value.toFixed(2)}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

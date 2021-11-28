import { useQuery } from 'react-query'
import { fetchCoinHistory } from '../api'
import ApexChart from 'react-apexcharts'

interface chartProps {
  coinId: string
}
interface IHistorical {
  time_open: string
  time_close: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  market_cap: number
}
function Chart({ coinId }: chartProps) {
  const { isLoading, data: dataSource } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    },
  )
  return (
    <div>
      {isLoading ? (
        'Loading Chart...'
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: 'price',
              data: dataSource?.map((price) => price.close),
            },
          ]}
          options={{
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: {
              show: false,
            },
            theme: {
              mode: 'dark',
            },
            stroke: {
              curve: 'smooth',
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              type: 'datetime',
              categories: dataSource?.map((price) => price.time_close),
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
            },
            colors: ['#0fbcf9'],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  )
}
export default Chart

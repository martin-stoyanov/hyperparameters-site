// import { Histogram, DensitySeries, XAxis, YAxis } from '@data-ui/histogram';
import kernel from 'kernel-smooth';
import LineChart from './LineChart';
import linSpace from '../components/utils/linSpace';

class KDEChartArray extends React.Component {
  render() {
    const { rawData, size, smoothing } = this.props;
    const xDomain = linSpace(Math.min(...rawData), Math.max(...rawData), rawData.length);
    const data = kernel.density(rawData, kernel.fun.gaussian, smoothing);
    const dataset = xDomain.map(x => ({ x, y: data(x) }));
    return (
      <LineChart
        size={size}
        dataset={dataset}
        options={{
          scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            callback: value => parseFloat(value).toFixed(1),
            ticks: {
              stepSize: 1,
               autoSkip: true,
               maxTicksLimit: 10,
            },
          }],
        },
      }}
      />
    );
  }
}

KDEChartArray.defaultProps = {
  smoothing: 0.35,
};
export default KDEChartArray;

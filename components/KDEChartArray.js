// import { Histogram, DensitySeries, XAxis, YAxis } from '@data-ui/histogram';
import kernel from 'kernel-smooth';
import LineChart from './LineChart';
import linSpace from '../components/utils/linSpace';

class KDEChartArray extends React.Component {
  render() {
    const { rawData, size } = this.props;
    const xDomain = linSpace(Math.min(...rawData), Math.max(...rawData), rawData.length);
    const data = kernel.density(rawData, kernel.fun.gaussian, 0.35);
    return (
      <LineChart size={size} labels={xDomain} dataset={data(xDomain)} />
    );
  }
}

export default KDEChartArray;

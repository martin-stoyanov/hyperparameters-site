// import { Histogram, DensitySeries, XAxis, YAxis } from '@data-ui/histogram';
import kernel from 'kernel-smooth';
import { Line } from 'react-chartjs-2';
import linSpace from '../components/utils/linSpace';

class KDEChartArray extends React.Component {
  render() {
    const { rawData } = this.props;
    const xDomain = linSpace(Math.min(...rawData), Math.max(...rawData), rawData.length);
    const data = kernel.density(rawData, kernel.fun.gaussian, 0.001);
    // console.log(data(0));
    // const { size } = this.props;
    // const width = size === 'small' ? 350 : 450;
    // const height = size === 'small' ? 220 : 250;
    // const rawData = Array(100).fill().map(Math.random);
    // console.log(typeof allColors);
    // console.log('aay');
    // console.log(rawData);
    console.log(xDomain);
    const formattedData = {
      labels: xDomain,
      datasets: [
        {
          label: '',
          backgroundColor: 'rgba(101, 199, 216,0.4)',
          borderColor: 'rgba(101, 199, 216,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(117,16,218,0.4)',
          hoverBorderColor: 'rgba(117,16,218,1)',
          data: rawData,
        },
      ],
    };

    return (
      <div>
        <Line
          data={formattedData}
        />
      </div>
    );

    /*
    return (
      <div>
        <Histogram
          ariaLabel='My histogram of ...'
          orientation='vertical'
          cumulative={false}
          normalized={true}
          binCount={25}
          width={width}
          height={height}
          valueAccessor={datum => datum}
          binType='numeric'
        >
          <DensitySeries
            animated={true}
            rawData={rawData}
            kernel='parabolic'
            smoothing={0.1}
          />
          <XAxis />
          <YAxis />
        </Histogram>
      </div>
    );
    */
  }
}

export default KDEChartArray;

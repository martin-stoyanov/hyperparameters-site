// import { Histogram, DensitySeries, XAxis, YAxis } from '@data-ui/histogram';
import { Box } from 'grommet';
import kernel from 'kernel-smooth';
import { Line } from 'react-chartjs-2';
import linSpace from '../components/utils/linSpace';

class KDEChartArray extends React.Component {
  render() {
    const { rawData, size } = this.props;
    // const xDomain = linSpace(Math.min(...rawData), Math.max(...rawData), rawData.length);
    const xDomain = linSpace(Math.min(...rawData), Math.max(...rawData), rawData.length);
    const data = kernel.density(rawData, kernel.fun.gaussian, 0.35);
    // console.log(data(0));
    // const { size } = this.props;
    const width = size === 'small' ? '350px' : '550px';
    const height = size === 'small' ? '220px' : '450px';
    console.log(size, width, height);
    // const rawData = Array(100).fill().map(Math.random);
    // console.log(typeof allColors);
    // console.log('aay');
    // console.log(rawData);
    const formattedData = {
      labels: xDomain,
      datasets: [
        {
          backgroundColor: 'rgba(206, 95, 47,0.2)',
          borderColor: 'rgba(206, 95, 47,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(206, 95, 47,0.2)',
          hoverBorderColor: 'rgba(206, 95, 47,1)',
          responsive: true,
          maintainAspectRatio: false,
          data: data(xDomain),
        },
      ],
    };

    return (
      <Box
        style={{ position: 'relative', width: { width }, height: { height } }}
      >
        <Line
          data={formattedData}
        />
      </Box>
    );
  }
}

export default KDEChartArray;

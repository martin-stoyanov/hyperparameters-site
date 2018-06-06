import { Histogram, DensitySeries, XAxis, YAxis } from '@data-ui/histogram';
// import { allColors } from '@data-ui/theme/src/color';

class KDEChartArray extends React.Component {
  render() {
    const { rawData } = this.props;
    const { onHomePage } = this.props;
    const width = onHomePage === 'true' ? 350 : 450;
    const height = onHomePage === 'true' ? 220 : 250;
    // const rawData = Array(100).fill().map(Math.random);
    // console.log(typeof allColors);
    // console.log('aay');
    return (
      <div>
        {console.log('start')}
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
        {console.log('start')}
      </div>
    );
  }
}

export default KDEChartArray;

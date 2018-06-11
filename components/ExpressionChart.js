import PropTypes from 'prop-types';
import LineChart from './LineChart';

const ExpressionChart = ({ data, argmin }) => (
  <LineChart
    size='large'
    dataset={data}
    options={{
      legend: {
        display: false,
      },
      title: {
        display: true,
        fontStyle: 'bold',
        fontSize: 16,
        text: argmin ? `x = ${(argmin.x || argmin || 0).toFixed(2)}` : '',
      },
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          callback: value => parseFloat(value).toFixed(1),
          ticks: {
            stepSize: 0.5,
             autoSkip: true,
          },
        }],
      },
    }}
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
  />
);

ExpressionChart.defaultProps = {
  data: [],
  argmin: undefined,
};

ExpressionChart.propTypes = {
  data: PropTypes.array,
  argmin: PropTypes.number,
};

export default ExpressionChart;

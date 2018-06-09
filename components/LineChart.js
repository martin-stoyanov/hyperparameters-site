import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component {
  render() {
    const { labels, dataset, size } = this.props;
    const width = size === 'small' ? '350px' : '550px';
    const height = size === 'small' ? '220px' : '450px';
    const formattedData = {
      labels,
      datasets: [
        {
          backgroundColor: 'rgba(206, 95, 47,0.2)',
          borderColor: 'rgba(206, 95, 47,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(206, 95, 47,0.2)',
          hoverBorderColor: 'rgba(206, 95, 47,1)',
          responsive: true,
          maintainAspectRatio: false,
          data: dataset,
          cubicInterpolationMode: 'monotone',
        },
      ],
    };
    return (
      <Box
        fill='true'
        style={{ position: 'relative', width, height }}
      >
        <Line
          data={formattedData}
        />
      </Box>
    );
  }
}

LineChart.defaultProps = {
  size: 'small',
};

LineChart.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  labels: PropTypes.array.isRequired,
  dataset: PropTypes.array.isRequired,
};

export default LineChart;

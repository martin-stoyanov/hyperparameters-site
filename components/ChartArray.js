import { Box } from 'grommet';
import { Bar } from 'react-chartjs-2';


class ChartArray extends React.Component {
  render() {
    const { array, size } = this.props;
    const width = size === 'small' ? '350px' : '550px';
    const height = size === 'small' ? '220px' : '450px';
    const count = array.reduce((n, val) => {
      const result = n;
      result[val] = result[val] === undefined ? 1 : result[val] + 1;
      return result;
    }, {});
    const labels = Object.keys(count);
    // makes object into 2d array
    const sorted = Object.keys(count).map(key => [key, count[key]]);
    if (sorted.length < 1) {
      return null;
    }
    /* // of array doesn't have an int, then add [int, 0] to array
    for (let i = 0; i < 5; i += 1) {
      if (!isIn2D(i, sorted)) {
        sorted.push([`${i}`, 0]);
      }
    }
*/
    // sort the array
    sorted.sort((a, b) => a[0] - b[0]);
    const data = {
      labels,
      datasets: [
        {
          label: `after ${array.length} iterations`,
          backgroundColor: 'rgba(206, 95, 47,0.4)',
          borderColor: 'rgba(206, 95, 47,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(206, 95, 47,0.4)',
          hoverBorderColor: 'rgba(206, 95, 47,1)',
          data: [sorted[0][1], sorted[1][1]],
        },
      ],
    };
    return (
      <Box
        fill='true'
        style={{ position: 'relative', width, height }}
      >
        <Bar
          data={data}
          options={{
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: `after ${array.length} Iterations`,
          },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }],
            },
        }}
        />
      </Box>
    );
  }
}

export default ChartArray;

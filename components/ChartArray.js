import { Bar } from 'react-chartjs-2';


class ChartArray extends React.Component {
  render() {
    function isIn2D(int, array) {
      let isIn = false;
      for (let i = 0; i < array.length; i += 1) {
        if (Number(array[i][0]) === int) { isIn = true; }
      }
      return isIn;
    }
    const { array } = this.props;
    let { labels } = this.props;
    labels = JSON.parse(labels);
    const count = array.reduce((n, val) => {
      const result = n;
      result[val] = result[val] === undefined ? 1 : result[val] + 1;
      return result;
    }, {});

    // makes object into 2d array
    const sorted = Object.keys(count).map(key => [key, count[key]]);
    console.log(sorted);

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
      labels: labels,
      datasets: [
        {
          label: 'after 500 iterations',
          backgroundColor: 'rgba(101, 199, 216,0.4)',
          borderColor: 'rgba(101, 199, 216,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(117,16,218,0.4)',
          hoverBorderColor: 'rgba(117,16,218,1)',
          data: [sorted[0][1], sorted[1][1]],
        },
      ],
    };
    return (
      <div>
        <Bar
          data={data}
        />
      </div>
    );
  }
}

export default ChartArray;

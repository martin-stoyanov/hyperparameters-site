import { Box, Text, Heading } from 'grommet';
import { PagingTable } from 'grommet-controls';

const STATES_MAP = ['new', 'running', 'done', 'error'];

export const formatTraingTime = (date, locale = 'en-us') => (
  date ? (new Date(date)).toLocaleDateString(locale, {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }) : undefined
);

export const periodToTime = (duration) => {
  if (!duration) {
    return {
      time: 0,
      units: 'ms',
    };
  }
  const hours = (duration / (1000 * 60 * 60)).toFixed(0);
  const minutes = (duration / (1000 * 60)).toFixed(0);
  if (hours > 0) {
    return {
      time: `${hours}:${minutes}`,
      units: 'hrs',
    };
  }
  const seconds = (duration / 1000).toFixed(0);
  if (minutes > 0) {
    return {
      time: `${minutes}:${seconds}`,
      units: 'min',
    };
  }
  const milliseconds = (duration).toFixed(0);
  if (seconds > 0) {
    return {
      time: `${seconds}:${milliseconds}`,
      units: 'sec',
    };
  }
  return {
    time: `${milliseconds}`,
    units: 'ms',
  };
};

export default({ trials }) => {
  let argColumns = [];
  if (trials.length > 0) {
    if (typeof trials[0].args === 'number') {
      argColumns.push({ Header: 'parameter', accessor: 'args', getProps: () => ({ align: 'end' }) });
    } else if (typeof trials[0].args === 'object') {
      argColumns = Object.keys(trials[0].args)
        .map(key => ({
          Header: key,
          accessor: `args.${key}`,
          getProps: () => ({ align: 'end' }),
        }));
    }
  }
  let resultColumns = [];
  if (trials.length > 0) {
    resultColumns = Object.keys(trials[0].result).map(key => ({
      Header: key,
      accessor: `result.${key}`,
      getProps: () => ({ align: 'end' }),
    }));
  }
  const columns = [
    {
      Header: 'id',
      accessor: 'tid',
      maxWidth: 60,
    },
    {
      Header: 'state',
      accessor: 'state',
      maxWidth: 140,
      Cell: cell => (<Text weight='bold'>{STATES_MAP[cell.value]}</Text>),
    },
    {
      Header: 'start',
      accessor: 'book_time',
      maxWidth: 150,
      Cell: cell => (<Text weight='bold'>{formatTraingTime(cell.value)}</Text>),
      getProps: () => ({ align: 'end' }),
    },
    {
      Header: 'update',
      id: 'updateTime',
      accessor: row => (row.refresh_time - row.book_time),
      Cell: (cell) => {
        const period = periodToTime(cell.value);
        return `${period.time} ${period.units}`;
      },
      maxWidth: 150,
      getProps: () => ({ align: 'end' }),
    },
    {
      Header: 'Arguments',
      decorations: {
        header: { align: 'center' },
      },
      columns: argColumns,
    },
    {
      Header: 'Results',
      decorations: {
        header: { align: 'center' },
      },
      columns: resultColumns,
    },
  ];
  return (
    <Box fill='horizontal' pad={{ bottom: 'large' }}>
      <Box align='center'>
        <Heading>Trials</Heading>
      </Box>
      <PagingTable
        columns={columns}
        data={trials}
        SubComponent={this.onExpand}
        defaultSorted={[{ id: 'tid', desc: false }]}
        decorations={{
          table: { elevation: 'large', border: 'all' },
          headerGroup: {
            background: 'brand', size: 'large',
          },
          header: { border: 'all', align: 'center' },
          body: { animation: { type: 'fadeIn', duration: 2000, size: 'large' } },
          rowOdd: {
            background: { color: 'light-1' },
          },
          pagination: { pad: { top: 'medium' } },
        }}
      />
    </Box>
  );
};

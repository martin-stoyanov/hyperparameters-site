import { Box, Text } from 'grommet';
import { PagingTable } from 'grommet-controls';

const STATES_MAP = ['new', 'running', 'done', 'error'];

export default({ trials }) => {
  console.log(trials);
  let argColumns = [];
  if (trials.length > 0) {
    argColumns = Object.keys(trials[0].args).map(key => ({
      Header: key,
      accessor: `args.${key}`,
      getProps: () => ({ align: 'end' }),
    }));
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
      Header: 'book',
      accessor: 'book_time',
      maxWidth: 150,
      getProps: () => ({ align: 'end' }),
    },
    {
      Header: 'update',
      accessor: 'refresh_time',
      maxWidth: 150,
      getProps: () => ({ align: 'end' }),
    },
    {
      Header: 'Arguments',
      getProps: () => ({ align: 'center' }),
      columns: argColumns,
    },
    {
      Header: 'Results',
      getProps: () => ({ align: 'center' }),
      columns: resultColumns,
    },
  ];
  return (
    <Box fill='horizontal'>
      <PagingTable
        columns={columns}
        data={trials}
        SubComponent={this.onExpand}
        defaultSorted={[{ id: 'tid', desc: false }]}
      />
    </Box>
  );
};

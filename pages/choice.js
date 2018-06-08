import hp from 'hyperparameters';
import { Box } from 'grommet';
import Doc from '../components/Doc';
import spaceToArray from '../components/utils/spaceToArray';
import ChartArray from '../components/ChartArray';
// import KDEChartArray from '../components/KDEChartArray';


export default () => (
  <Doc
    name='choice'
    example={(
      <Box basis='medium' pad='small'>
        <ChartArray array={spaceToArray(hp.choice('choice', ['cat', 'dog']))} labels='["cat", "dog"]' />
      </Box>
    )}
    desc={{
        description: 'Randomly returns one of the options',
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'options', description: 'an array containing the options', required: true }],
}}
  />
);

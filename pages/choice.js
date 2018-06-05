import { Box } from 'grommet';
import Doc from '../components/Doc';
import hp from '../src';
import spaceToArray from '../components/utils/spaceToArray';
import ChartArray from '../components/ChartArray';
// import KDEChartArray from '../components/KDEChartArray';


export default () => (
  <Doc
    name='randint'
    example={(
      <Box basis='medium' pad='small'>
        <ChartArray array={spaceToArray(hp.choice('choice', ['cat', 'dog']))} labels='["cat", "dog"]' />
      </Box>
    )}
    desc={{
        description: 'Return a random integer in the range [0, upper)',
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'upper', description: 'The random integer can be anywhere from 0 to upper (not included)', required: false }],
}}
  />
);

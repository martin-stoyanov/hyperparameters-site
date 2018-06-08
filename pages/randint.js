import hp from 'hyperparameters';
import { Box } from 'grommet';
import Doc from '../components/Doc';
import spaceToArray from '../components/utils/spaceToArray';
// import ChartArray from '../components/ChartArray';
import KDEChartArray from '../components/KDEChartArray';


export default () => (
  <Doc
    name='randint'
    example={(
      <Box basis='medium' pad='small'>
        <KDEChartArray rawData={spaceToArray(hp.randint('random int', 5))} />
      </Box>
    )}
    desc={{
        description: 'Return a random integer in the range [0, upper)',
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'upper', description: 'The random integer can be anywhere from 0 to upper (not included)', required: false }],
}}
  />
);

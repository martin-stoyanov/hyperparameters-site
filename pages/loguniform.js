import { Box } from 'grommet';
import hp from 'hyperparameters';
import Doc from '../components/Doc';
import spaceToArray from '../components/utils/spaceToArray';
import KDEChartArray from '../components/KDEChartArray';

export default () => (
  <Box>
    <Doc
      name='loguniform'
      example={(
        <Box basis='medium'>
          <KDEChartArray rawData={spaceToArray(hp.loguniform('loguniform', 0, 5))} />
        </Box>)}
      desc={{
        description: 'Returns a value exp(uniform(low, high)) so the logarithm of the return value is uniformly distributed.',
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'low', description: 'The minimum possible value of the number', required: false },
            { name: 'high', description: 'The maximum possible value of the number', required: false }],
}}
    />
  </Box>
);

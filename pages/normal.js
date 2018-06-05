import { Box } from 'grommet';
import Doc from '../components/Doc';
import hp from '../src';
import spaceToArray from '../components/utils/spaceToArray';
import KDEChartArray from '../components/KDEChartArray';

const desc = "Returns a real number that's normally-distributed with mean mu and standard deviation sigma";
export default () => (
  <Doc
    name='normal'
    example={(
      <Box basis='medium' pad='small'>
        <KDEChartArray rawData={spaceToArray(hp.normal('normal', 0, 1))} />
      </Box>
    )}
    desc={{
        description: desc,
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'mu', description: 'the mean of the random variable', required: false },
            { name: 'sigma', description: 'the standard deviation of the random variable', required: false }],
}}
  />
);

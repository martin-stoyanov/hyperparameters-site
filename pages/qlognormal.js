import { Box } from 'grommet';
import Doc from '../components/Doc';
import hp from '../src';
import spaceToArray from '../components/utils/spaceToArray';
import KDEChartArray from '../components/KDEChartArray';

const desc = 'returns a quantized value of <a href="/lognormal">hp.lognormal</a> i.e. (exp(normal(mu, sigma)) / q) * q';
export default () => (
  <Doc
    name='qlognormal'
    example={(
      <Box basis='medium' pad='small'>
        <KDEChartArray rawData={spaceToArray(hp.qlognormal('qlognormal', 0, 1, 0.1))} />
      </Box>
    )}
    desc={{
        description: desc,
        properties: [{ name: 'label', description: 'a name for the expression' },
        { name: 'mu', description: 'the mean of the random variable', required: false },
        { name: 'sigma', description: 'the standard deviation of the random variable', required: false },
        { name: 'q', description: 'how much to "quantize" by', required: false }],
}}
  />
);

import { Box } from 'grommet';
import Doc from '../components/Doc';
import hp from '../src';
import spaceToArray from '../components/utils/spaceToArray';
import KDEChartArray from '../components/KDEChartArray';

const desc = 'returns a quantized value of <a href="/uniform">hp.uniform</a> i.e. (uniform(low, high) / q) * q';
export default () => (
  <Doc
    name='quniform'
    example={(
      <Box basis='medium' pad='small'>
        <KDEChartArray rawData={spaceToArray(hp.quniform('quniform', 0, 5, 0.1))} />
      </Box>
    )}
    desc={{
        description: desc,
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'low', description: 'The minimum possible value of the number', required: false },
            { name: 'high', description: 'The maximum possible value of the number', required: false },
            { name: 'q', description: 'how much to "quantize" by', required: false }],
}}
  />
);

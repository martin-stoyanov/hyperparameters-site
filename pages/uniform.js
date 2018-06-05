import { Box, Paragraph } from 'grommet';
import Doc from '../components/Doc';
import hp from '../src';
import spaceToArray from '../components/utils/spaceToArray';
import KDEChartArray from '../components/KDEChartArray';

export default () => (
  <Box>
    <Doc
      name='uniform'
      example={(
        <Box basis='medium'>
          <KDEChartArray rawData={spaceToArray(hp.uniform('uniform', 0, 5))} />
        </Box>)}
      desc={{
        description: 'Returns a single value uniformly between low and high i.e. any value between low and high has an equal probability of being selected',
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'low', description: 'The minimum possible value of the number', required: false },
            { name: 'high', description: 'The maximum possible value of the number', required: false }],
}}
      examples={{
    upper: (
      <Box>
        <Paragraph size='small' margin='none'>example</Paragraph>
      </Box>
    ),
  }}
    />
  </Box>
);

import { Box, Paragraph } from 'grommet';
import Doc from '../components/Doc';

export default () => (
  <Box>
    <Doc
      name='hpjs.uniform(label, low, high)'
      code={'hpjs.uniform(\'uniform\', 0, 5);'}
      size='large'
      smoothing='0.2'
      style={{
        pointRadius: 0,
        borderWidth: 1,
      }}
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

import { Box, Paragraph } from 'grommet';
import Doc from '../components/Doc';

export default () => (
  <Box>
    <Doc
      name='uniform'
      code={'hp.uniform(\'uniform\', 0, 5);'}
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

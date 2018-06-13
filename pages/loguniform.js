import { Box } from 'grommet';
import Doc from '../components/Doc';

export default () => (
  <Box>
    <Doc
      name='hpjs.loguniform(label, low, high)'
      code={'hpjs.loguniform(\'loguniform\', 0, 5);'}
      size='large'
      style={{
        pointRadius: 0,
        borderWidth: 1,
      }}
      desc={{
        description: 'Returns a value exp(uniform(low, high)) so the logarithm of the return value is uniformly distributed.',
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'low', description: 'The minimum possible value of the number', required: false },
            { name: 'high', description: 'The maximum possible value of the number', required: false }],
}}
    />
  </Box>
);

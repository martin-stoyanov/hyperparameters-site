import { Box } from 'grommet';
import Doc from '../components/Doc';

export default () => (
  <Box>
    <Doc
      name='hpjs.loguniform(low, high)'
      code='hpjs.loguniform(0, 5);'
      size='large'
      style={{
        pointRadius: 0,
        borderWidth: 1,
      }}
      desc={{
        description: 'Returns a logarithmic version of <a href="/uniform">hpjs.uniform</a> i.e. exp(uniform(low,high))',
        properties: [
            { name: 'low', description: 'The minimum value of the number', required: false },
            { name: 'high', description: 'The maximum value of the number', required: false }],
}}
    />
  </Box>
);

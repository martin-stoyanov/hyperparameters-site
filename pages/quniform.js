import Doc from '../components/Doc';

const desc = 'returns a quantized value of <a href="/uniform">hp.uniform</a> i.e. (uniform(low, high) / q) * q';
export default () => (
  <Doc
    name='quniform'
    code={'hpjs.quniform(\'quniform\', 0, 5, 0.1);'}
    size='large'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: desc,
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'low', description: 'The minimum possible value of the number', required: false },
            { name: 'high', description: 'The maximum possible value of the number', required: false },
            { name: 'q', description: 'how much to "quantize" by', required: false }],
}}
  />
);

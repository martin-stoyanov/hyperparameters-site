import Doc from '../components/Doc';

const desc = 'returns a quantized value of <a href="/normal">hp.normal</a> i.e. (normal(mu, sigma) / q) * q';
export default () => (
  <Doc
    name='qnormal'
    code={'hpjs.qnormal(\'qnormal\', 0, 1, 0.1);'}
    size='large'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: desc,
        properties: [{ name: 'label', description: 'a name for the expression' },
        { name: 'mu', description: 'the mean of the random variable', required: false },
        { name: 'sigma', description: 'the standard deviation of the random variable', required: false },
        { name: 'q', description: 'how much to "quantize" by', required: false }],
}}
  />
);

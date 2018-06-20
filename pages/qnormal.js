import Doc from '../components/Doc';

const desc = 'returns a quantized value of <a href="/normal">hpjs.normal</a> i.e. (normal(mu, sigma) / q) * q';
export default () => (
  <Doc
    name='hpjs.qnormal(label, mu, sigma, q)'
    code='hpjs.qnormal(0, 1, 0.5);'
    size='large'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: desc,
        properties: [
        { name: 'mu', description: 'the mean of the random variable', required: false },
        { name: 'sigma', description: 'the standard deviation of the random variable', required: false },
        { name: 'q', description: 'how much to "quantize" by', required: false }],
}}
  />
);

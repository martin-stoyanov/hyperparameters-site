import Doc from '../components/Doc';

const desc = 'Returns a version of <a href="/lognormal">hpjs.lognormal</a> with "step size" q. <br />Mathematically represented as (exp(normal(mu, sigma)) / q) * q';
export default () => (
  <Doc
    name='hpjs.qlognormal(mu, sigma, q)'
    code='hpjs.qlognormal(0, 1, 0.5);'
    size='large'
    smoothing='0.025'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: desc,
        properties: [
        { name: 'mu', description: 'the mean of the random variable', required: false },
        { name: 'sigma', description: 'the standard deviation of the random variable', required: false },
        { name: 'q', description: 'The "step size of the function', required: false }],
}}
  />
);

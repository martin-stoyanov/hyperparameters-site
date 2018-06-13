import Doc from '../components/Doc';

const desc = 'Returns a logarithmic version of <a href="/normal">hp.normal</a> i.e. exp(normal(mu, sigma))';
export default () => (
  <Doc
    name='hpjs.lognormal(label, mu, sigma)'
    code={'hpjs.lognormal(\'lognormal\', 0, 1);'}
    size='large'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: desc,
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'mu', description: 'the mean of the random variable', required: false },
            { name: 'sigma', description: 'the standard deviation of the random variable', required: false }],
}}
  />
);

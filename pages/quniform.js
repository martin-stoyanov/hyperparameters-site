import Doc from '../components/Doc';

const desc = 'Returns a version of of <a href="/uniform">hpjs.uniform</a> with step size "q" <br /> Mathematically represented as (uniform(low, high) / q) * q';
export default () => (
  <Doc
    name='hpjs.quniform(low, high, q)'
    code='hpjs.quniform(0, 5, 0.5);'
    size='large'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: desc,
        properties: [
            { name: 'low', description: 'The minimum value of the number', required: false },
            { name: 'high', description: 'The maximum value of the number', required: false },
            { name: 'q', description: 'The "step size" of the function', required: false }],
}}
  />
);

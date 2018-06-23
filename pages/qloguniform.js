import Doc from '../components/Doc';

const desc = 'Returns a version of <a href="/loguniform">hpjs.loguniform</a> with step size "q." <br /> Mathematically represented as (loguniform(low, high) / q) * q';
export default () => (
  <Doc
    name='hpjs.qloguniform(low, high, q)'
    code='hpjs.qloguniform(0, 5, 5);'
    size='large'
    smoothing='0.15'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: desc,
        properties: [
            { name: 'low', description: 'The minimum possible value of the number', required: false },
            { name: 'high', description: 'The maximum possible value of the number', required: false },
            { name: 'q', description: 'The "step size" of the function', required: false }],
}}
  />
);

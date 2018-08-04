import Doc from '../components/Doc';
import ChartArray from '../components/ChartArray';

export default () => (
  <Doc
    name='hpjs.choice(options)'
    code={'hpjs.choice([\'cat\', \'dog\']);'}
    example={data => (data ? <ChartArray array={data} size='large' /> : null)}
    labels='["cat", "dog"]'
    desc={{
        description: 'Randomly returns one of the options',
        properties: [
            { name: 'options', description: 'an array containing the options', required: false }],
}}
  />
);

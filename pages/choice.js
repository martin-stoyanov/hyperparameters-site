import Doc from '../components/Doc';
import ChartArray from '../components/ChartArray';

export default () => (
  <Doc
    name='choice'
    code={'hp.choice(\'choice\', [\'cat\', \'dog\']);'}
    example={data => (data ? <ChartArray array={data}  /> : null)}
    labels='["cat", "dog"]'

    desc={{
        description: 'Randomly returns one of the options',
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'options', description: 'an array containing the options', required: true }],
}}
  />
);

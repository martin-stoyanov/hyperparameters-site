import Doc from '../components/Doc';


export default () => (
  <Doc
    name='randint'
    code={'hp.randint(\'randint\', 5);'}
    smoothing='0.01'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: 'Return a random integer in the range [0, upper)',
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'upper', description: 'The random integer can be anywhere from 0 to upper (not included)', required: false }],
          }}
  />
);

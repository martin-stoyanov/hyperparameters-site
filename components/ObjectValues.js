import { Box } from 'grommet';
import Value from './Value';

export default ({ obj, ...rest }) => (
  <Box align='center' direction='row' gap='medium'>
    {Object.keys(obj).map(key => (
      <Value key={`obj_items_${key}`} {...rest} label={key} value={obj[key]} />
    ))}
  </Box>
);

import { Box, Heading, Paragraph } from 'grommet';
import { ImageStamp } from 'grommet-controls';
import ObjectValues from './ObjectValues';

export default ({ items, description }) => (
  <Box flex={true} align='center' justify='between'>
    <Box align='center' border='bottom'>
      <Box align='center' direction='row' gap='small' pad={{ vertical: 'small' }}>
        <ImageStamp size='small' src='https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' />
        <Heading level={3} color='brand' margin='none'>
            TensorFlow.js
        </Heading>
      </Box>
      <Paragraph textAlign='center' margin='small'>
        {description}
      </Paragraph>
    </Box>
    <Box pad='small'>
      <ObjectValues obj={items} />
    </Box>
  </Box>
);

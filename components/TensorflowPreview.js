import { Box, Heading, Text, Paragraph } from 'grommet';
import { ImageStamp } from 'grommet-controls';

export default ({ items, description }) => {
  const lines = Object.keys(items).map(key => (
    <Text key={`tf_preview_${key}`} size='large'>
      {`${key}: ${items[key]}`}
    </Text>
  ));
  return (
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
      <Box pad='small' align='center'>
        {lines}
      </Box>
    </Box>
  );
};

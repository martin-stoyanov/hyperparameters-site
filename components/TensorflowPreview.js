import { Box, Heading, Text } from 'grommet';

export default ({ items }) => {
  const lines = Object.keys(items).map(key => (
    <Text color='neutral-3' key={`tf_preview_${key}`} weight='bold' size='large'>
      {`${key}: ${items[key]}`}
    </Text>
  ));
  return (
    <Box flex={true} align='center' justify='between'>
      <Box align='center'>
        <Heading color='brand' margin='none'>
          Tensorflow
        </Heading>
        <Heading level={4} color='brand' margin='none'>
          best parameters
        </Heading>
      </Box>
      <Box pad='small'>
        {lines}
      </Box>
    </Box>
  );
};

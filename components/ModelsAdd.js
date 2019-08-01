import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Box, Text } from 'grommet';
// import ErrorMessage from './ErrorMessage';

function modelAdd(client, { name, trials }) {
  client.mutate({
    mutation: gql`
      mutation addModel($name: String!, $trials: [TrialInputType] ) {
          addModel(name: $name, trials: $trials) {
            hpjsModel{
              name
            }
          }
      }
    `,
    variables: {
      name,
      trials,
    },
  });
}

export default function AddModel({ name, trials }) {
  return (
    <ApolloConsumer>
      {client => (
        <Button
          primary={true}
          hoverIndicator='background'
          onClick={() => modelAdd(client, { name, trials })}
        >
          <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}><Text>click</Text></Box>
        </Button>
      )}
    </ApolloConsumer>
  );
}

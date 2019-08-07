import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Box, Text } from 'grommet';
// import ErrorMessage from './ErrorMessage';

function modelAdd(client, {
  name, trials, parameters, parameterValues,
}) {
  client.mutate({
    mutation: gql`
      mutation addModel($name: String!, $trials: [TrialInputType],
        $parameters: [ParameterInputType], $parameterValues: [ParameterValueInputType] ) {
          addModel(name: $name, trials: $trials, parameters: $parameters, 
            parameterValues: $parameterValues) {
              hpjsModel{
                name
              }
          }
      }
    `,
    variables: {
      name,
      trials,
      parameters,
      parameterValues,
    },
  });
}

export default function AddModel({
  name, trials, parameters, parameterValues,
}) {
  return (
    <ApolloConsumer>
      {client => (
        <Button
          primary={true}
          hoverIndicator='background'
          onClick={() => modelAdd(client, {
 name, trials, parameters, parameterValues,
})}
        >
          <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}><Text>click</Text></Box>
        </Button>
      )}
    </ApolloConsumer>
  );
}

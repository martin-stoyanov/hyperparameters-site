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

function formatTimes(date) {
  return (new Date(date));
}

export default function AddModel({
  name, experiment,
}) {
  const uploadTrials = (client) => {
    const trials = [];
    const parameters = [];
    const parameterValues = [];

    // adding parameters
    Object.keys(experiment[0].args).forEach((parameter) => {
      parameters.push({ name: parameter });
    });

    // adding trials and parameter values(which are linked to parameters)
    experiment.forEach((trial, id) => {
      trials.push({
        trial: id + 1,
        startTime: formatTimes(trial.book_time),
        endTime: formatTimes(trial.refresh_time),
        accuracy: trial.result.accuracy,
      });

      const parametersData = trial.args;
      Object.keys(parametersData).forEach((parameter) => {
        parameterValues.push({
          value: parametersData[parameter],
          trial: id + 1,
          parameterName: parameter,
        });
      });
      // parameterValues.push()
      // parameterArgs.forEach((a, b) => {
      //   console.log(a);
      //   console.log(b);
      // });
      console.log(experiment);
      // console.log(trials);
      // console.log(parameters);
      // console.log(parameterValues);
    });
    modelAdd(client, {
      name, trials, parameters, parameterValues,
    });
  };
  // console.log(experiment);
  // console.log(Object.keys(experiment[0].args));

  return (
    <ApolloConsumer>
      {client => (
        <Button
          primary={true}
          hoverIndicator='background'
          onClick={() => uploadTrials(client)}
        >
          <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
            <Text>Click to submit trials</Text>
          </Box>
        </Button>
      )}
    </ApolloConsumer>
  );
}

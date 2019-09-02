import gql from 'graphql-tag';
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
  // eslint-disable-next-line
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
    });
    modelAdd(client, {
      name, trials, parameters, parameterValues,
    });
  };

  return null;
  /* return (
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
  ); */
}

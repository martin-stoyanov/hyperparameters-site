import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { PagingTable } from 'grommet-controls';
import { Heading, Box } from 'grommet';
import RoutedAnchor from './RoutedAnchor';
// import ErrorMessage from './ErrorMessage';


export const allModelsQuery = gql`
  query models {
    allModels{
      name
      trials{
        trial
        accuracy
      }parameters{
        name
        parameterValue{
          value
        }
      }
    }
  }
`;


export default function ModelsList() {
  return (
    <Query query={allModelsQuery}>
      {({
 loading, error, data,
}) => {
        if (error) {
          console.log(error);
          return <div>error</div>;
        }

        if (loading) return <div>Loading</div>;
        if (!data) return null;
        const { allModels } = data;

        const bestTrials = allModels.map((model) => {
          const bestTrialParameters = {
            'name': model.name,
            'accuracy': 0,
            'hyperparameters': {},
          };
          let bestTrial;
          let bestAccuracy = 0;
          model.trials.forEach((trial) => {
            if (trial.accuracy > bestAccuracy) {
              bestAccuracy = trial.accuracy;
              bestTrialParameters.accuracy = bestAccuracy;
              bestTrial = trial.trial;
            }
          });
          model.parameters.forEach((trial) => {
            bestTrialParameters.hyperparameters[trial.name] = trial.parameterValue[bestTrial].value;
          });
          return (
              {
                name: bestTrialParameters.name.split(' ')[0],
                accuracy: bestTrialParameters.accuracy.toFixed(4),
                hp: JSON.stringify(bestTrialParameters.hyperparameters),
              }
            );
        });

        return (
          <section>
            <PagingTable
              columns={[
                 {
                  Header: 'Model Name',
                  Cell: props => (
                    <RoutedAnchor path={`./tensorflow/${props.original.name.toLowerCase()}`} >
                      <Box>
                        <Heading level={3} size='small' margin={{ top: 'none', bottom: 'xsmall' }}>
                          <strong>{props.original.name}</strong>
                        </Heading>
                      </Box>
                    </RoutedAnchor>
                  ),
                   minWidth: 150,
                 }, {
                   Header: 'Accuracy',
                   accessor: 'accuracy',
                   minWidth: 100,
                 }, {
                   Header: 'Hyperparameters',
                   accessor: 'hp',
                   minWidth: 600,
                 },
                 ]}
              data={bestTrials}
            />
          </section>
        );
      }}
    </Query>
  );
}

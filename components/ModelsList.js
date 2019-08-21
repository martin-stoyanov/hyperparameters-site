import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { PagingTable } from 'grommet-controls';
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
        console.log(allModels);

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
            // console.log('aa');
            // console.log(trial);
          });
          model.parameters.forEach((trial) => {
            // bestTrialParameters.hyperparameters.push(
            //   {trial.name = trial.parameterValue[bestTrial]
            //   );
            bestTrialParameters.hyperparameters[trial.name] = trial.parameterValue[bestTrial].value;
          });
          // return bestTrialParameters;
          console.log(bestTrialParameters);
          return (
              {
                name: bestTrialParameters.name,
                accuracy: bestTrialParameters.accuracy.toFixed(4),
                hp: JSON.stringify(bestTrialParameters.hyperparameters),
              }
            );
        });
        console.log(bestTrials);

        return (
          <section>
            <PagingTable
              columns={[
                 {
                   Header: 'Model Name',
                   accessor: 'name',
                 }, {
                   Header: 'Accuracy',
                   accessor: 'accuracy',
                 }, {
                   Header: 'Hyperparameters',
                   accessor: 'hp',
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

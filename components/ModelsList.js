import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// import ErrorMessage from './ErrorMessage';
// import PostUpvoter from './PostUpvoter';

export const allModelsQuery = gql`
  query model() {
    trials{
      trial
    }parameters{
      name
      parameterValue{
        value
      }
    }    
  }
`;


export default function ModelsList() {
  return (
    <Query query={allModelsQuery}>
      {({
 loading, error, data: { model },
}) => {
        if (error) console.log('There was an error');
        if (loading) return <div>Loading</div>;

        return (
          <section>
            <ul>
              {model.trials.map(trial => (
                <li>
                  { trial }
                </li>
              ))}
            </ul>
          </section>
        );
      }}
    </Query>
  );
}

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// import ErrorMessage from './ErrorMessage';


export const allModelsQuery = gql`
  query models {
    allModels{
      name
      trials{
        trial
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
        console.log(data);
        if (error) {
          console.log(error);
          return <div>error</div>;
        }

        if (loading) return <div>Loading</div>;
        if (!data) return null;
        const { allModels } = data;
        console.log(data);
        return (
          <section>
            <ul>
              {allModels.map(model => (
                <li>
                  {model.name}
                  {console.log(model)}
                </li>
              ))}
            </ul>
          </section>
        );
      }}
    </Query>
  );
}

import React from 'react'
import { ApolloClient, InMemoryCache,useQuery, gql} from '@apollo/client';



const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
  });

  
export default client;
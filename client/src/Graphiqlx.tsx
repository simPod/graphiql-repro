import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import React from 'react';

import 'graphiql/graphiql.css';

export const Graphiqlx: React.FC = () => {
  const graphQLFetcher = createGraphiQLFetcher({
    url: '',
  });

  return <GraphiQL fetcher={graphQLFetcher} />;
};

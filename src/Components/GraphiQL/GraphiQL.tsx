import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL as GraphiQLComponent } from 'graphiql';
import React from 'react';

import './imports.scss';

const graphQLFetcher = createGraphiQLFetcher(
  {
    subscriptionUrl: '',
    url: '',
  },
);

export const GraphiQL: React.FC = () => (
  <GraphiQLComponent fetcher={graphQLFetcher} />
);

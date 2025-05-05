import React from 'react';
import { createRoot } from 'react-dom/client';
import { Graphiqlx } from "./Graphiqlx";

export const renderApp = () => {
  const node = document.getElementById('app-holder');
  if (node === null) {
    return;
  }

  const root = createRoot(node);

  root.render(<Graphiqlx />);
};

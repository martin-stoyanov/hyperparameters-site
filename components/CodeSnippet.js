import React from 'react';
import dynamic from 'next/dynamic';

const CodeEditor = dynamic(import('./CodeEditor'), {
  ssr: false,
});

export default props => (
  <div>
    <CodeEditor {...props} />
  </div>
);

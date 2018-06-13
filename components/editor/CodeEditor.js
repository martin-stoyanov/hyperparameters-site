/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import AceEditor from 'react-ace';

import 'brace/theme/twilight';
import './javascript';


const CodeEditor = ({ code, options, ...rest }) => (
  <Box fill='horizontal' background='#141414' style={{ paddingTop: '10px' }}>
    <AceEditor
      value={code}
      mode='javascript'
      theme='twilight'
      editorProps={{ $blockScrolling: true }}
      {...options}
      {...rest}
    />
  </Box>

);

CodeEditor.defaultProps = {
  options: {
    tabSize: 2,
    width: '100%',
    height: '100px',
    showGutter: true,
  },
};

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  options: PropTypes.object,
};

export default CodeEditor;

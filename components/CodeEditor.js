/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/twilight';


const CodeEditor = ({ code, options, onChange }) => (
  <Box fill='horizontal'>
    <AceEditor
      value={code}
      mode='javascript'
      theme='twilight'
      onChange={onChange}
      editorProps={{ $blockScrolling: true }}
      {...options}
    />
  </Box>

);

CodeEditor.defaultProps = {
  options: {
    tabSize: 2,
    width: '100%',
    height: '100px',
    showGutter: false,
  },
  onChange: undefined,
};

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.object,
};

export default CodeEditor;

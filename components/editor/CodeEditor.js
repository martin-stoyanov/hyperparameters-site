/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import AceEditor from 'react-ace';

import 'brace/theme/twilight';
import './javascript';


const CodeEditor = ({ code, options, ...rest }) => {
  const nLines = code.split(/\r\n|\r|\n/).length;
  console.log(nLines);
  return (
    <Box fill='horizontal' background='#141414' style={{ paddingTop: '10px' }}>
      <AceEditor
        value={code}
        mode='javascript'
        theme='twilight'
        height={`${(nLines + 1) * 16}px`}
        editorProps={{ $blockScrolling: true }}
        {...options}
        {...rest}
      />
    </Box>
  );
};

CodeEditor.defaultProps = {
  options: {
    tabSize: 2,
    width: '100%',
    showGutter: true,
  },
};

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  options: PropTypes.object,
};

export default CodeEditor;

import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';


const CodeEditor = dynamic(import('./CodeEditor'), {
  ssr: false,
});

const CodeExample = ({ code, ...rest }) => (
  <CodeEditor
    showGutter={false}
    readOnly={true}
    code={code}
    background='#F9F9F9'
    highlightActiveLine={false}
    focus={false}
    theme='dawn'
    {...rest}
  />
);

CodeExample.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeExample;

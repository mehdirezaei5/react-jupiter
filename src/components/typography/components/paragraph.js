import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import { Content } from './paragraph.style';

const Paragraph = (props) => {
  const {
    children, size, ...rest
  } = props;
  if (children === undefined) return null;
  return (
    <ThemeProvider theme={theme}>
      <Content size={size} data-test="paragraph" {...rest}>
        {children}
      </Content>
    </ThemeProvider>
  );
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.number, // accepted values: 8 or 9 or 10 or ...
};

Paragraph.defaultProps = {
  size: theme.defaultSize,
};

export default Paragraph;
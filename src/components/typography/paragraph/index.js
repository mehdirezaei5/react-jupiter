import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import { Content } from './index.styles';

const Paragraph = (props) => {
  const {
    children, size, color, ...rest
  } = props;
  if (children === undefined) return null;
  return (
    <ThemeProvider theme={theme}>
      <Content size={size} color={color} data-test="paragraph" {...rest}>
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
  size: PropTypes.number,
  color: PropTypes.oneOf(['riverBedDark', 'riverBed']),
};

Paragraph.defaultProps = {
  size: theme.defaultSize,
  color: 'riverBedDark',
};

export default Paragraph;

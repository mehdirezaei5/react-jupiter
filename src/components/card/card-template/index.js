import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import generalTheme from '../../themes';
import { TemplateContainer, LinkWrapper } from './index.style';


const CardTemplate = (props) => {
  const {
    maxWidth, children, level, hoverToLevel, linkTo, direction, ...rest
  } = props;

  const renderContent = () => {
    if (linkTo.length > 0) {
      return (
        <LinkWrapper to={linkTo} data-test="card-template-link-wrapper">
          <TemplateContainer
            maxWidth={maxWidth}
            level={level}
            hoverToLevel={hoverToLevel}
            direction={direction}
            data-test="card-template"
            {...rest}
          >
            {children}
          </TemplateContainer>
        </LinkWrapper>
      );
    }
    return (
      <TemplateContainer
        maxWidth={maxWidth}
        level={level}
        hoverToLevel={hoverToLevel}
        direction={direction}
        data-test="card-template"
        {...rest}
      >
        {children}
      </TemplateContainer>
    );
  };

  return (
    <ThemeProvider theme={generalTheme}>
      {renderContent()}
    </ThemeProvider>
  );
};

CardTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  hoverToLevel: PropTypes.number,
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  linkTo: PropTypes.string,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

CardTemplate.defaultProps = {
  level: 1,
  hoverToLevel: 1,
  maxWidth: null,
  linkTo: '',
  direction: 'vertical',
};

export default CardTemplate;
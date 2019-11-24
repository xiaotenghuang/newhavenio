import React from 'react';
import PropTypes from 'prop-types';
import Text from 'components/shared/text';
import * as Styled from './teammember.css';

/**
 * A static component to display image, name, title and description of a team member
 */
const TeamMember = ({ name, title, description, image }) => {
  return (
    <Styled.Container>
      {image && <Styled.Img fluid={image.node.fluid} />}
      <Text fontSize={3} my={1} fontWeight={700} color="Grays.100">
        {name}
      </Text>
      <Text fontSize={3} my={1} color="Grays.100">
        {title}
      </Text>
      <Text
        fontSize={1}
        my={1}
        lineHeight={1.5}
        color="Grays.100"
        textAlign="center"
      >
        {description}
      </Text>
    </Styled.Container>
  );
};

TeamMember.propTypes = {
  /**
   * ISO-8601 date string
   */
  // date: PropTypes.string.isRequired,
};

export default TeamMember;

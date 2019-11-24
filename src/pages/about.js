import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import Box from 'components/shared/box';
import Title from 'components/shared/title';
import Text from 'components/shared/text';
import TeamMember from 'components/shared/teammember';

const About = ({ data }) => {
  const teamMembers = data.allTeamYaml.edges;
  const memberImages = data.allImageSharp.edges;
  return (
    <Layout>
      <Head pageTitle="About" />
      <Box padding="2rem 4rem">
        <Title as="h2" size="large" color="Oranges.100">
          About
        </Title>
        <Text fontSize={3} color="Grays.100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero
          aliquid enim sit repellendus alias! Qui illum, sapiente in, nostrum,
          deleniti magnam perferendis quod impedit facilis repellat culpa cumque
          delectus?
        </Text>
        <Box my={4}>
          <Title as="h3" color="Grays.100">
            The Board
          </Title>
          <Box display="flex" flexWrap="wrap">
            {teamMembers.map(({ node: member }) => (
              <TeamMember
                key={member.name}
                name={member.name}
                title={member.title}
                description={member.description}
                image={memberImages.find(
                  image => image.node.fluid.originalName === member.picture
                )}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export const aboutQuery = graphql`
  query AboutQuery {
    allTeamYaml {
      edges {
        node {
          description
          name
          picture
          title
        }
      }
    }
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`;

About.propTypes = {
  data: PropTypes.shape({
    allTeamYaml: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            description: PropTypes.string,
            name: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.string,
          }),
        })
      ),
    }),
  }),
};

export default About;

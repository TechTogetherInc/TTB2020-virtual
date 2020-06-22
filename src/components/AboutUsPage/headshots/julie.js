import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Julie = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Julie_Le_Marketing.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{
        border: "2px solid rebeccapurple",
        borderRadius: "50%",
      }}
      alt="teammate pic"
    />
  );
};

export default Julie;

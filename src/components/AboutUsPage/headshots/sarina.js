import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Sarina = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Sarina_Simon_Director.jpg" }) {
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

export default Sarina;

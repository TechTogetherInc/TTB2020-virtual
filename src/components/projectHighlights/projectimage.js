import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Note: You can change "images" to whatever you'd like.

const ProjectImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
        <Img
          alt={props.alt}
          style={{
            // border: "2px solid rebeccapurple",
            // borderRadius: "50%",
            height: 700,
            width: 700,
          }}
          fluid={image.node.childImageSharp.fluid}
        />
      );
    }}
  />
);

export default ProjectImage;
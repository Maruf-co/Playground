import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout/layout";
import { Link, graphql } from "gatsby";

export interface BlogProps {
  data: any;
}

const BlogPage: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page">
      {
        data.allMdx.edges.map((edge: any) => (
          <article key={edge.node.id}>
            <h2>
              <Link to={`/blog/${edge.node.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {edge.node.frontmatter.date}</p>
            <p>{edge.node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: slug}) {

      edges {
        node {
          slug
          frontmatter {
            date
            title
          }
          excerpt
          id
        }
      }
    }
  }
`

export default BlogPage;

export const Head = () => <Seo title="Blog Page" />

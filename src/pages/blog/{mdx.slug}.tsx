import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Content } from "../../components/Content";
import Layout from "../../components/Layout/layout";
import Seo from "../../components/seo";

export interface BlogPageProps {
  data: any;
}

const BlogPost: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>

      <MDXProvider components={Content}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      body
      frontmatter {
        date
        title
        tags
        author
        coverId
      }
      slug
      tableOfContents
      timeToRead
    }
  }
`;

export const Head: React.FC<BlogPageProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;

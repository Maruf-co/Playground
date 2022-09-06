import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"




const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h3>Doo bee doo bee dooba...</h3>
      <h3>Doo bee doo bee dooba...</h3>
      <StaticImage
        src="../images/perry.png"
        alt="Perry!"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />

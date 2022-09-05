import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as s from './layout.module.css';


export interface LayoutProps {
    pageTitle: string,
    children: React.ReactNode
}

const Layout:  React.FC<LayoutProps>  = ({
    pageTitle, 
    children
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div className={s.container}>
      <header className={s.siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={s.navLinks}>
          <li className={s.navLinkItem}>
            <Link className={s.navLinkText} to="/">Home</Link>
            </li>
          <li className={s.navLinkItem}>
            <Link className={s.navLinkText} to="/blog">Blog</Link>
            </li>
        </ul>
      </nav>
      <main>
        <h1 className={s.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
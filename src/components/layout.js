/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid'

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          minHeight: '100vh',
          minWidth: 100,
        }}
      >
        <CardHeader title={data.site.siteMetadata.title} />
        {/* <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        > */}
          <Grid item xs={6}>
            <main>{children}</main>
          </Grid>
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
        {/* </div> */}
      </Grid>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

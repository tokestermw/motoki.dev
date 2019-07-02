import React from "react"
// import { Link } from "gatsby"

import TextEditor from "../components/editor"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`motoki`, `motoki wu`]} />
    <TextEditor></TextEditor>
  </Layout>
)

export default IndexPage

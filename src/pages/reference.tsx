import React from 'react'
import { API } from '@stoplight/elements'
import '@stoplight/elements/styles.min.css'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title="Immutable X API Reference"
      description="Reference for the Immutable X API"
    >
      <API apiDescriptionUrl="https://raw.githubusercontent.com/stoplightio/Public-APIs/master/reference/zoom/openapi.yaml" />
    </Layout>
  )
}

import React from "react"
import {link} from 'gatsby'

import Layout from "../components/layout"
import Head from '../components/head'

const NotFoundPage = () => {
  return (
  <Layout>
	<Head title="404"/>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)
} 

export default NotFoundPage

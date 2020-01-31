import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const AboutPage = () => {
	return (
		<Layout>
			<Head title="about"/>
			<h1>About</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, reiciendis!</p>
			<p><Link to="/contact">Contact-Me</Link></p>		
		</Layout>
		
		)
}

export default AboutPage
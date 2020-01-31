import React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata"

import footerStles from './styles/footer.module.scss'
const footer = () => {
	const {author} = useSiteMetadata
	return (
		<footer className = {footerStles.footer}>
			<p>Created by  {author},&copy; 2019 </p>
		</footer>
		)
}

export default footer
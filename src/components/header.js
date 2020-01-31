import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from "../hooks/use-site-metadata"


// import './styles/header.module.scss'
import HeaderStyles from './styles/header.module.scss'

const Header = () => {
	const {title} = useSiteMetadata()
	return(
			<header className={HeaderStyles.header}>
				<h1>
					<Link className={HeaderStyles.title} activeClassName={HeaderStyles.activeNavItem} to="/">
						<h1>{title}!</h1>
					</Link>
				</h1>
				<nav className={HeaderStyles.navList}>
					<li><Link className={HeaderStyles.navItem}  activeClassName={HeaderStyles.activeNavItem} to="/">Home</Link></li>
					<li><Link className={HeaderStyles.navItem}  activeClassName={HeaderStyles.activeNavItem} to="/about">About Me</Link></li>
					<li><Link className={HeaderStyles.navItem}  activeClassName={HeaderStyles.activeNavItem} to="/blog">Blog</Link></li>
					<li><Link className={HeaderStyles.navItem}  activeClassName={HeaderStyles.activeNavItem} to="/contact">Contact Me</Link></li>
				</nav>
			</header>
		
		)
}

export default Header
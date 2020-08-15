import React from 'react'
import { Grid } from 'react-styled-flexboxgrid'

import Header from './Header'
import Spinner from './Spinner'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => (
	<Grid fluid>
		<Header />
		<Spinner />
		<main>{children}</main>
		<Footer />
	</Grid>
)

export default Layout

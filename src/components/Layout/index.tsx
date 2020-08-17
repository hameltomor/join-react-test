import React from 'react'
import { Grid } from 'react-styled-flexboxgrid'

import GlobalStyle from 'styles/css/global'

import Header from './Header'
// import Spinner from './Spinner'
import Main from './Main'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => (
	<Grid fluid={true}>
		<GlobalStyle />
		<Header />
		{/* <Spinner /> on loading */}
		<Main>{children}</Main>
		<Footer />
	</Grid>
)

export default Layout

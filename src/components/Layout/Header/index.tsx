import React from 'react'
import Link from 'next/link'
import { Col, Row } from 'react-styled-flexboxgrid'

import Nav from './parts/Nav'
import Logo from './parts/Logo'
import StyledLink from './parts/Link'

const Header: React.FC = () => {
	return (
		<header>
			<Row>
				<Col xs={6} md={6}>
					<Link href="/">
						<Logo />
					</Link>
				</Col>
				<Col xs={6} md={6}>
					<Nav>
						<Link href="/candidate" passHref>
							<StyledLink>Candidate</StyledLink>
						</Link>
						<Link href="/recruiter" passHref>
							<StyledLink>Recruiter</StyledLink>
						</Link>
					</Nav>
				</Col>
			</Row>
		</header>
	)
};

export default Header;

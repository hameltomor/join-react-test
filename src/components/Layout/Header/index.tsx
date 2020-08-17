import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Col, Row } from 'react-styled-flexboxgrid'

import Nav from './parts/Nav'
import Logo from './parts/Logo'
import StyledLink from './parts/Link'

const StyledHeader = styled.header`
	background-color: #fff;
	height: 60px;
	display: flex;
	align-items: center;
	padding: 12px 20px;
	position: sticky;
	margin-left: -2rem;
	margin-right: -2rem;
	box-shadow: rgb(228, 231, 235) 0px 1.2px 0px;
	width: 100%;
`


const Header: React.FC = () => {
	return (
		<StyledHeader>
			<Row between="xs">
				<Col xs={6}>
					<Link href="/">
						<a><Logo /></a>
					</Link>
				</Col>
				<Col xs={6}>
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
		</StyledHeader>
	)
};

export default Header;

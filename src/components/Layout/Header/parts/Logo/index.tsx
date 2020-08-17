import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
	width: 64px;
	height: auto;
	max-width: 100%;
	display: block;
`

const Logo = () => (
	<Img
		src="/static/icons/logo.svg"
		alt="Join Logo"
	/>
);

export default Logo;

import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
	height: auto;
	max-width: 100%;
	display: block;
`

const Logo = () => (
	<Img
		src="/static/icons/logo-grey.svg"
		alt="Join Logo"
	/>
);

export default Logo;

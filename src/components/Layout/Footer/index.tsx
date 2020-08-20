import React from 'react'
import styled from 'styled-components'

import Logo from './parts/Logo'

const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 150px;
`

const Footer = () => (
  <StyledFooter>
    <Logo />
  </StyledFooter>
);

export default Footer;

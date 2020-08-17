import React from 'react'
import styled from 'styled-components'

const StyledBio = styled.div`
	h3 {

	}

	p {

	}
`

interface IBio {
	fullName?: string
	email?: string
}

const Bio: React.FC<IBio> = ({ fullName = '', email = ''}) => (
	<StyledBio>
		<h3>{fullName}</h3>
		<p>{email}</p>
	</StyledBio>
)

export default Bio

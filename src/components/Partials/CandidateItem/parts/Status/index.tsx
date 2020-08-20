import React from 'react'
import styled from 'styled-components'

import { CandidateState } from 'types/Candidate'

const StyledStatus = styled.div`
	text-transform: uppercase;
`

interface IStatus {
	state?: CandidateState
}

const Status: React.FC<IStatus> = ({ state = CandidateState.submitted }) => {
	return (
		<StyledStatus>{state}</StyledStatus>
	)
}

export default Status

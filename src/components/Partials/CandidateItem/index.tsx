import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'

import theme from 'styles/theme'

import { Candidate, CandidateState } from 'types/Candidate'

import Avatar from './parts/Avatar'
import Bio from './parts/Bio'
import Dropdown from './parts/Dropdown'
import Score from './parts/Score'
import Status from './parts/Status'

const Wrapper = styled(Row)`
	background-color: #fff;
	border-radius: 5%;
	box-shadow: rgba(199, 205, 216, 0.4) 0px 4px 12px 0px;
	margin-top: 25px;
	margin-left: -1rem;
	margin-right: -1rem;
	padding: 10px 15px;
`

interface ICandidateItem {
	candidate: Candidate

	updateCandidate: (candidate: Candidate) => Promise<Candidate | undefined>
	removeCandidate: (id: string) => Promise<void>
}

const CandidateItem: React.FC<ICandidateItem> = (props) => {
	const {
		candidate,

		updateCandidate,
		removeCandidate
	} = props
	const { avatar } = candidate
	const avatarUrl = avatar && avatar.length ? avatar : theme.images?.anonymous

	const handleOnDelete = async () => {
		await removeCandidate(candidate._id)
	}


	const handleCandidateState = async (state: CandidateState) => {
		const updatedCandidate: Candidate = { ...candidate, state }
		await updateCandidate(updatedCandidate);
	}

	return (
		<Wrapper>
			<Col xs={12}>
				<Row>
					<Col>
						<Avatar src={avatarUrl} alt={candidate.fullName} />
					</Col>
					<Col>
						<Bio fullName={candidate.fullName} email={candidate.email} />
					</Col>
					<Col>
						<Score value={candidate.score} />
					</Col>
				</Row>
			</Col>
			<Col xs={8}>
				<Status state={candidate.state} />
			</Col>
			<Col xs={4}>
				<Dropdown onCandidateStateChanges={handleCandidateState} onDelete={handleOnDelete} />
			</Col>
		</Wrapper>
	)
}

export default CandidateItem

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const CircleScore = styled.div`
`

interface IScore {
	value?: number
}

const Score: React.FC<IScore> = ({ value = 0 }) => {
	return (
		<Wrapper>
			<CircleScore>{value}%</CircleScore>
		</Wrapper>
	)
}

export default Score

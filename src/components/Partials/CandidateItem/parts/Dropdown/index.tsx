import React from 'react'
import styled from 'styled-components'
import Menu, { SubMenu, MenuItem, Divider } from 'rc-menu'

import { CandidateState } from 'types/Candidate'
import { KeyObjectMap } from 'types/Helpers'

const StyledDropdown = styled(Menu)`
	width: 100px;
`

const StyledMenuItem = styled(MenuItem)`
	text-transform: uppercase;
`

interface IDropdown {
	onDelete: () => void
	onCandidateStateChanges: (state: CandidateState) => void
}

const Dropdown: React.FC<IDropdown> = ({ onCandidateStateChanges, onDelete }) => {
	const handleOnSelect = (menuItem: any): void => { // Note: `rc-menu` lib doesn't support TS :(
		const key = menuItem.key as string
		if (key === 'delete') {
			onDelete()
			return
		}
		onCandidateStateChanges(key as CandidateState)
	}

	return (
		<StyledDropdown
			mode="horizontal"
			openAnimation="slide-up"
			onSelect={handleOnSelect}
		>
			<SubMenu title="...">
				<StyledMenuItem key="delete">Delete</StyledMenuItem>
				<Divider />
				{Object.keys(CandidateState).map(key => {
					const value = (CandidateState as KeyObjectMap)[key]
					return <StyledMenuItem index={key} key={key}>{value}</StyledMenuItem>
				})}
			</SubMenu>
		</StyledDropdown >
	)
}

export default Dropdown

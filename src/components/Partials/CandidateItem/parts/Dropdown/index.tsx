import React from 'react'
import styled from 'styled-components'
import Menu, { SubMenu, MenuItem, Divider } from 'rc-menu'

const StyledDropdown = styled.div`

`

interface IDropdown {
	handleOnSelect?: (key: any) => void
}

const Dropdown: React.FC<IDropdown> = ({ handleOnSelect }) => (
	<StyledDropdown>
		<Menu
			mode="horizontal"
			openAnimation="slide-up"
			onSelect={handleOnSelect}
		>
			<SubMenu title=". . .">
				<MenuItem key="1">Delete</MenuItem>
				<Divider />
				<MenuItem key="2">Submitted</MenuItem>
				<MenuItem key="3">In review</MenuItem>
				<MenuItem key="4">Not a fit</MenuItem>
				<MenuItem key="5">Hired</MenuItem>
			</SubMenu>
		</Menu>
	</StyledDropdown>
)

export default Dropdown

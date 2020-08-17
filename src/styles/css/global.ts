import { createGlobalStyle } from 'styled-components'

import ResetStyle from './reset'

const GlobalStyle =  createGlobalStyle`
	${ResetStyle}
	html, body {
		background-color: #fafbfd
	}
`;

export default GlobalStyle

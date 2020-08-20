import { DefaultTheme, IThemeMedia } from 'styled-components'

const themeMedia: IThemeMedia = {
	smallUp: 'only screen',
	smallOnly: 'only screen and (max-width: 640px)',

	mediumUp: 'only screen and (min-width: 641px)',
	mediumOnly: 'only screen and (min-width: 641px) and (max-width: 1024px)',

	largeUp: 'only screen and (min-width: 1025px)',
	largeOnly: 'only screen and (min-width: 1025px) and (max-width: 90em)',
}

const theme: DefaultTheme = {
	color: {
		primary: '#0e93f7'
	},
	images: {
		anonymous: '/static/images/anonymous.png'
	},
	media: themeMedia
}

export default theme

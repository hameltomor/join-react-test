import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			primary: string
		}
		font?: {
			family: string
		}
		images?: {
			anonymous: string
		}
	}
}

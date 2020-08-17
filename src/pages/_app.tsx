import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider as MobxProvider } from 'mobx-react'
import { useStore } from 'store/index'

import theme from 'styles/theme'

import Layout from 'components/Layout'

const NextApp = ({ Component, pageProps }: AppProps) => {
	const store = useStore(pageProps.initialState)
	return (
		<ThemeProvider theme={theme}>
			<MobxProvider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MobxProvider>
		</ThemeProvider>
	)
}

export default NextApp

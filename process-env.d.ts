declare namespace NodeJS {
	export interface ProcessEnv {
		isProd: boolean
		API_URL: string
		REST_DB_API: string
		REST_DB_KEY: string
	}
}

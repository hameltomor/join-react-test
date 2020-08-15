module.exports = {
	extends: ['react-app', 'plugin:prettier/recommended'],
	parser: 'babel-eslint',
	plugins: ['prettier'],
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			extends: [
				'react-app',
				'plugin:import/errors',
				'plugin:import/warnings',
				'plugin:import/typescript',
				'plugin:@typescript-eslint/recommended',
				'prettier/@typescript-eslint',
				'plugin:prettier/recommended'
			],
			plugins: ['@typescript-eslint', 'prettier'],
			parser: '@typescript-eslint/parser',
			rules: {
				'react/jsx-filename-extension': 'off',
				'@typescript-eslint/indent': [2, 2],
				'@typescript-eslint/no-explicit-any': 'off',
				'no-undef': 'off',
				'no-unused-expressions': 'off',
				'@typescript-eslint/no-unused-expressions': ['error'],
				'react/self-closing-comp': ['error'],
				'import/extensions': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/indent': 'off',
			}
		}
	],
	rules: {
		'func-names': 'off',
		'vars-on-top': 'off',
		'max-len': 'off',
		'no-plusplus': 'off',
		'no-nested-ternary': 'off',
		'eqeqeq': 'off'
	},
};

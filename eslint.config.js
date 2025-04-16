import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
	  "semi": ["error", "always", { "omitLastInOneLineBlock": false }],
	  indent: ["error", "tab", { "SwitchCase": 1 }],
	  "comma-dangle": ["error", "never"],
	  quotes: ["error", "double", { "allowTemplateLiterals": true }],
	  "react/prop-types": [0],
	  "@typescript-eslint/no-unused-vars": ["warn"],
	  "@typescript-eslint/no-empty-object-type" : ["off"],
	  // "no-console": ["warn"],
	  "space-before-blocks": ["error", "always"]
    },
  },
)

import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

import unusedImports from "eslint-plugin-unused-imports"
import reactHooks from "eslint-plugin-react-hooks"
import tseslint from "@typescript-eslint/eslint-plugin"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    plugins: {
      "unused-imports": unusedImports,
      "react-hooks": reactHooks,
      "@typescript-eslint": tseslint,
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],

      "@typescript-eslint/no-explicit-any": "warn",

      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
    },
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  }),
]

export default eslintConfig

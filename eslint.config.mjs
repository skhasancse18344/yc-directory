import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js presets
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Your global ignores
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // ↓ Override rules just for config files
  {
    files: [
      "tailwind.config.{js,cjs,mjs,ts}",
      "postcss.config.{js,cjs,mjs,ts}",
      "eslint.config.{js,cjs,mjs,ts}",
      "next.config.{js,cjs,mjs,ts}",
    ],
    rules: {
      // Turn off the TS rule that forbids require()
      "@typescript-eslint/no-require-imports": "off",
      // (Optional) If you hit this too:
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];

export default eslintConfig;

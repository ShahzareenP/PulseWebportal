/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "/examples/",
    "/e2e/.*/__tests__",
    "\\.snap$",
  ],
  "moduleNameMapper": {
    "d3": "<rootDir>/node_modules/d3/dist/d3.min.js",
    "^d3-(.*)$": "<rootDir>/node_modules/d3-$1/dist/d3-$1.min.js"
  },
  moduleFileExtensions: ["ts", "js", "json"],
  verbose: true,
  globals: {
    "test-jest": {
      tsConfig: "<rootDir>/tsConfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
};

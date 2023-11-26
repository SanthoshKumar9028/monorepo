export default {
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.(css|s[ca]ss)": "<rootDir>/jest-style-transforms.js",
  },
  testEnvironment: "jsdom",
};

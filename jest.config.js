// jest.config.js
export default {
  verbose: true,
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.[t|j]sx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
  transformIgnorePatterns: [
    // varsayılan olarak node_modules dışında olan her şeyi transform edin
    "/node_modules/(?!(your-dependency-to-transform)/)",
  ],
  // Diğer Jest ayarları
};

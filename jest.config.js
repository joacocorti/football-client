module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|@react-native" +
      "|@testing-library/react-native" +
      "|react-navigation" +
      ")/)",
  ],
};

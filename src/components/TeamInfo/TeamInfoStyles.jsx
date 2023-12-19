import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

const commonStyles: ViewStyle | TextStyle | ImageStyle = {
  fontSize: 20,
  fontWeight: "bold",
  alignSelf: "center",
};

export default StyleSheet.create({
  container: { padding: 10 },
  teamInformation: { ...commonStyles },
  teamFounded: {
    ...commonStyles,
  },
  teamCountry: {
    ...commonStyles,
  },
  teamImage: {
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  Titles: {
    ...commonStyles,
    marginTop: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    padding: 10,
  },
  matchCard: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  matchDate: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "center",
  },
  matchResults: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 5,
  },
  playerCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  playerImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 10,
  },
  playerName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  playerInfo: {
    flex: 1,
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import TeamInfo from "../../components/TeamInfo/TeamInfo";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [teamDetails, setTeamDetails] = useState({});
  const [teamMatches, setTeamMatches] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  const baseURL = "http://localhost:4000";
  const fetchTeams = async () => {
    try {
      const response = await fetch(`${baseURL}/teams`);
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTeamInfo = async (teamKey) => {
    try {
      const teamResponse = await fetch(`${baseURL}/teams/${teamKey}`);
      const teamData = await teamResponse.json();
      setTeamDetails(teamData);

      const matchesResponse = await fetch(
        `${baseURL}/teams/${teamKey}/matches`
      );
      const matchesData = await matchesResponse.json();
      setTeamMatches(matchesData);

      const playersResponse = await fetch(
        `${baseURL}/teams/${teamKey}/players`
      );
      const playersData = await playersResponse.json();
      setTeamPlayers(playersData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);
  useEffect(() => {
    if (selectedTeam) {
      fetchTeamInfo(selectedTeam);
    }
  }, [selectedTeam]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Football Info</Text>
      <Picker
        selectedValue={
          selectedTeam
        }
        style={styles.picker}
        mode="dropdown"
        onValueChange={(itemValue) => setSelectedTeam(itemValue)}
      >
        <Picker.Item label="Select a Team" value="" />
        {teams.map((team) => (
          <Picker.Item
            key={team.team_key}
            label={team.team_name}
            value={team.team_key}
          />
        ))}
      </Picker>
      <TeamInfo
        teamDetails={teamDetails}
        teamMatches={teamMatches}
        teamPlayers={teamPlayers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: 200,
    height: 44,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default Home;

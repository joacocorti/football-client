import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const TeamInfo = ({ teamDetails, teamMatches, teamPlayers }) => {
  const team = teamDetails[0];
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Team Information
        </Text>
        {team && (
          <View>
            <Text style={{ fontSize: 18 }}>{team.team_name}</Text>
            <Text>Country: {team.team_country}</Text>
            <Text>Founded in: {team.team_founded}</Text>
            <Image
              source={{ uri: team.team_badge }}
              style={{ width: 100, height: 100 }}
            />
          </View>
        )}

        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
          Matches
        </Text>
        {teamMatches.map((match) => (
          <View key={match.match_id} style={{ marginBottom: 10 }}>
            <Text>{match.match_date}</Text>
            <Text>
              {match.match_hometeam_name} vs {match.match_awayteam_name}
            </Text>
            <Text>
              Result: {match.match_hometeam_score} -{" "}
              {match.match_awayteam_score}
            </Text>
          </View>
        ))}

        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
          Players
        </Text>
        {teamPlayers.map((player) => (
          <View key={player.player_id} style={{ marginBottom: 10 }}>
            <Text>{player.player_name}</Text>
            <Text>Number: {player.player_number}</Text>
            <Text>Position: {player.player_type}</Text>
            <Image
              source={{ uri: player.player_image }}
              style={{ width: 50, height: 50 }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TeamInfo;

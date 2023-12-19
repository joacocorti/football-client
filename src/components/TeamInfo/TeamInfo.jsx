import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./TeamInfoStyles";

const TeamInfo = ({ teamDetails, teamMatches, teamPlayers }) => {
  const team = teamDetails[0];
  return (
    <ScrollView>
      <View style={styles.container}>
        {team && (
          <View>
            <Text style={styles.teamInformation}>Team Information</Text>
            <Image source={{ uri: team.team_badge }} style={styles.teamImage} />
            <Text style={styles.teamInformation}>{team.team_name}</Text>
            <Text style={styles.teamCountry}>Country: {team.team_country}</Text>
            <Text style={styles.teamFounded}>
              Founded in: {team.team_founded}
            </Text>
          </View>
        )}
        {team && <Text style={styles.Titles}>Matches ⚽🥅</Text>}
        {teamMatches.map((match, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.matchDate}>{match.match_date}</Text>
            <Text style={styles.matchCard}>{match.match_hometeam_name}</Text>
            <Text style={styles.matchCard}>vs </Text>
            <Text style={styles.matchCard}>{match.match_awayteam_name}</Text>
            <Text style={styles.matchResults}>
              Result: {match.match_hometeam_score} -{" "}
              {match.match_awayteam_score}
            </Text>
          </View>
        ))}

        {team && <Text style={styles.Titles}>{team.team_name} Players 👨🏻‍🦱</Text>}
        {teamPlayers.map((player, index) => (
          <View key={index} style={[styles.card, styles.playerCard]}>
            <Image
              source={{ uri: player.player_image }}
              style={styles.playerImage}
            />
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{player.player_name}</Text>
              <Text>Number: {player.player_number}</Text>
              <Text>Position: {player.player_type}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TeamInfo;

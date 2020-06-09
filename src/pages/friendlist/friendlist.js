import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import primaryColor from '../../visual.json';
import SearchBar from "../../components/searchInput";
import Partition from "../../components/PartitionFriendList";
import ItemFriend from "../../components/FriendListItem";
import friendlistStyle from "./friendlist.styles.js";
// import { Container } from './styles';
import headerImage from "../../assets/1957056.png";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FriendList({ navigation }) {
  return (
    <View style={styles.Content}>
      <ImageBackground source={headerImage} style={styles.imageTop}>
        <View style={styles.headerText}>
          <Icon
            name="circle-o"
            size={15}
            color={primaryColor.themeColor}
            style={{
              top: 20,
              textShadowColor: primaryColor.themeColor,
              shadowOpacity: 10,
              textShadowRadius: 10,
              textShadowOffset: { width: 0, height: 0 },
            }}
          />
          <Text style={styles.textTop}>
            {"    "}
            Preparado para{"\n"}
            sua noite, Sileno?
          </Text>
          <Text style={styles.subtextTop}>O difícil? Deixa com a gente :)</Text>
        </View>
        <View style={styles.topicons}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <MaterialIcons name="chevron-left" size={50} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="person-add" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.divisor}></View>
      <View style={styles.friendsView}>
            <View style={styles.pageRoutes}>
            <Text style={styles.textRoutes}>Sátiros</Text>
            <Text style={styles.textRoutes}>Amigos</Text>
            <Text style={styles.textRoutes}>Contatos</Text>
            </View>

            <View style={styles.searchContainer}>
            <View style={
                styles.separadorSimples}></View>
            <SearchBar />
            </View>
           
            <View style={{ height: "70%", top: 220 }}>
            <ScrollView>
                <Partition />
                <ItemFriend
                name="Andrew Richard"
                description="Architect, New York"
                status="online"
                />
                <ItemFriend
                name="Andrew Richard"
                description="Architect, New York"
                status="online"
                /><ItemFriend
                name="Andrew Richard"
                description="Architect, New York"
                status="online"
                />
                <ItemFriend
                name="Andrew Richard"
                description="Architect, New York"
                status="online"
                />
                
            </ScrollView>
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(friendlistStyle);

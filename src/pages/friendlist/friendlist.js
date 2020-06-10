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
import primaryColor from "../../visual.json";
import SearchBar from "../../components/searchInput";
import Partition from "../../components/PartitionFriendList";
import ItemFriend from "../../components/FriendListItem";
import friendlistStyle from "./friendlist.styles.js";
// import { Container } from './styles';
import headerImage from "../../assets/1957056.png";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FriendList({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0B0D19",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          elevation: 0,
          backgroundColor: "#0B0D19",
        }}
      >
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
            <Text style={styles.subtextTop}>
              O difícil? Deixa com a gente :)
            </Text>
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
        <View
          style={{
            borderTopWidth:2,
            borderTopColor:'#f8295f',
            backgroundColor: '#0B0D19',
          }}
        >
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
            
          <View style={{
            paddingBottom:'15%',
          }}>
            <Partition letra={'A'}/>
            <ItemFriend
              name="Andrew Richard"
              description="Architect, New York"
              status="online"
            />
            <ItemFriend
              name="Andrew Richard"
              description="Architect, New York"
              status="online"
            />
            <ItemFriend
              name="Andrew Richard"
              description="Architect, New York"
              status="online"
            />
            <ItemFriend
              name="Andrew Richard"
              description="Architect, New York"
              status="online"
            />
            <ItemFriend
              name="Andrew Richard"
              description="Architect, New York"
              status="online"
            />
            <ItemFriend
              name="Andrew Richard"
              description="Architect, New York"
              status="online"
            />
            <ItemFriend
              name="Andrew Richard"
              description="Architect, New York"
              status="online"
            />
            <ItemFriend
              name="Andrew Richard"
              description="Architect, New York"
              status="online"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create(friendlistStyle);

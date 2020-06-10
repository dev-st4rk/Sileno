import React from "react";
import { TouchableHighlight, Animated, View, Text, Image } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Register from "./pages/register/register";
import Verification from "./pages/verification/verification";
import Icon from "react-native-vector-icons/FontAwesome5";
import Main from "./pages/main/main";
import Profile from "./pages/profile/profile";
import Friends from "./pages/friendlist/friendlist.js";

import QrCode from "./pages/friendlist/friendQr";
import White from "./pages/white/white";
import Night from "./pages/night/night";
import Logo from './components/sileno';
import tabbarConfigs from "./components/styleElements.json";
import setProfile from "./pages/setprofile/setprofile";
import ContactsList from "./pages/ContactsList";

const Routes = createBottomTabNavigator(
  {
    Setting: {
      screen: createStackNavigator(
        {
          Friends,
        },
        {
          initialRouteName: "Friends",
          headerMode:
            tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
          mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
        }
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          
          if (tintColor == tabbarConfigs.colorElements.paletaTabbar.itemAtivo)
            return (
              <View
                style={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                <Icon
                  name="user-friends"
                  size={20}
                  color={tintColor}
                  style={{
                    textShadowColor: "#f8295f",
                    shadowOpacity: 10,
                    textShadowRadius: 10,
                    textShadowOffset: { width: 0, height: 0 },
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: tintColor,
                      fontSize: 10,
                      textShadowColor: "#f8295f",
                      shadowOpacity: 10,
                      textShadowRadius: 10,
                      textShadowOffset: { width: 0, height: 0 },
                    }}
                  >
                    social
                  </Text>
                </View>
              </View>
            );
          else
            return (
              <View
                style={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                <Icon name="user-friends" size={20} color={tintColor} style={{}} />
                {/* <View>
                  <Text style={{ color: tintColor, fontSize: 10 }}>
                  social
                  </Text>
                </View> */}
              </View>
            );
        },
      }),
    },
    Block: {
      screen: createStackNavigator(
        {
          White,
        },
        {
          initialRouteName: "White",
          headerMode:
            tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
          mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
        }
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          
          if (tintColor == tabbarConfigs.colorElements.paletaTabbar.itemAtivo)
            return (
              <View
                style={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                <Icon
                  name="cubes"
                  size={20}
                  color={tintColor}
                  style={{
                    textShadowColor: "#f8295f",
                    shadowOpacity: 10,
                    textShadowRadius: 10,
                    textShadowOffset: { width: 0, height: 0 },
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: tintColor,
                      fontSize: 10,
                      textShadowColor: "#f8295f",
                      shadowOpacity: 10,
                      textShadowRadius: 10,
                      textShadowOffset: { width: 0, height: 0 },
                    }}
                  >
                    aplicativos
                  </Text>
                </View>
              </View>
            );
          else
            return (
              <View
                style={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                <Icon name="cubes" size={20} color={tintColor} style={{}} />
                {/* <View>
                  <Text style={{ color: tintColor, fontSize: 10 }}>
                    aplicativos
                  </Text>
                </View> */}
              </View>
            );
        },
      }),
    },
    Main: {
      screen: createStackNavigator(
        {
          Main,
        },
        {
          initialRouteName: "Main",
          headerMode:
            tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
          mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
        }
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          
          if (tintColor == tabbarConfigs.colorElements.paletaTabbar.itemAtivo)
            return (
              <View
                style={{ alignItems: "center", justifyContent: "flex-end" }}>
                <Logo color={tintColor} size={30} />
              </View>
            );
          else
            return (
              <View
                style={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                <Logo color={tintColor} size={30} />
              </View>
            );
        },
      }),
    },
    Night: {
      screen: createStackNavigator(
        {
          Night,
        },
        {
          initialRouteName: "Night",
          headerMode:
            tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
          mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
        }
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          
          if (tintColor == tabbarConfigs.colorElements.paletaTabbar.itemAtivo)
            return (
              <View
                style={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                <Icon
                  name="fire"
                  size={20}
                  color={tintColor}
                  style={{
                    textShadowColor: "#f8295f",
                    shadowOpacity: 10,
                    textShadowRadius: 10,
                    textShadowOffset: { width: 0, height: 0 },
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: tintColor,
                      fontSize: 10,
                      textShadowColor: "#f8295f",
                      shadowOpacity: 10,
                      textShadowRadius: 10,
                      textShadowOffset: { width: 0, height: 0 },
                    }}
                  >
                    noite
                  </Text>
                </View>
              </View>
            );
          else
            return (
              <View
                style={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                <Icon backgroundColor={tintColor} name="fire" fill={tintColor} size={20} color={tintColor} style={{}} />
                {/* <View>
                  <Text style={{ color: tintColor, fontSize: 10 }}>
                    noite
                  </Text>
                </View> */}
              </View>
            );
        },
      }),
    },
    Profile: {
      screen: createStackNavigator(
        {
          Profile,
          QrCode,
          Friends,
          ContactsList,
        },
        {
          initialRouteName: "Profile",
          headerMode:
            tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
          mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
        }
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          
          if (tintColor == tabbarConfigs.colorElements.paletaTabbar.itemAtivo)
            return (
              <View style={{ alignItems: "center", justifyContent: "flex-end",textShadowColor: "#f8295f",
              shadowOpacity: 10,
              textShadowRadius: 10,
              textShadowOffset: { width: 0, height: 0 }, }}>
              <Image
                style={{
                  height:
                    tabbarConfigs.tabbar.config.iconePerfil.tamanhoImagemPerfil,
                  width:
                    tabbarConfigs.tabbar.config.iconePerfil.tamanhoImagemPerfil,
                  borderRadius: tabbarConfigs.tabbar.config.iconePerfil.radius,
                  borderWidth: tabbarConfigs.tabbar.config.iconePerfil.border,
                  borderColor: tintColor,
                }}
                source={{ uri: "https://www.thispersondoesnotexist.com/image" }}
              />
              <View>
                <Text style={{ color: tintColor, fontSize: 10,textShadowColor: "#f8295f",
                      shadowOpacity: 10,
                      textShadowRadius: 10,
                      textShadowOffset: { width: 0, height: 0 }, }}>perfil</Text>
              </View>
            </View>
            );
          else
            return (
              <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
            <Image
              style={{
                height:
                  tabbarConfigs.tabbar.config.iconePerfil.tamanhoImagemPerfil,
                width:
                  tabbarConfigs.tabbar.config.iconePerfil.tamanhoImagemPerfil,
                borderRadius: tabbarConfigs.tabbar.config.iconePerfil.radius,
                borderWidth: tabbarConfigs.tabbar.config.iconePerfil.border,
                borderColor: tintColor,
              }}
              source={{ uri: "https://www.thispersondoesnotexist.com/image" }}
            />
            {/* <View>
              <Text style={{ color: tintColor, fontSize: 10 }}>perfil</Text>
            </View> */}
          </View>
            );
        },
      }),
    },
  },
  {
    initialRouteName: "Main",
    tabBarOptions: {
      showLabel: false, // aqui esconde as labels, ou seja, o texto que vai debaixo do ícone
      activeTintColor: tabbarConfigs.colorElements.paletaTabbar.itemAtivo, // da fill nitemAtivo. o SVG com essa cor quando aquela route estiver atabbaraitTvael, ou seja, quando o usuáriopa clicar lá., que é derivado de @appColorElements
      inactiveTintColor: tabbarConfigs.colorElements.paletaTabbar.itemInativo, // da fill no SVG com essa cor quando aquela route estiver ativa, ou seja, quando o usuário clicar lá., que é derivado de @appColorElements
      style: {
        // styles da tabbar em si. Tamanho
        // Lembrando que ele recebe os mesmos parametros do json por causa da linearidade
        height: tabbarConfigs.tabbar.config.alturaTabbar,
        position: tabbarConfigs.tabbar.config.espacoBrancoEmVolta, // absolute para remover o espaço branco que fica em volta quando é colocado border radius
        borderTopRightRadius: tabbarConfigs.tabbar.config.borderTopRadius,
        borderTopLeftRadius: tabbarConfigs.tabbar.config.borderTopRadius,
        elevation: tabbarConfigs.tabbar.config.elevation, // shadow da tabbar para não deixar a transição da tela pra ela de forma seca.
        borderTopColor: tabbarConfigs.tabbar.config.bordaAcimaTabbar, // cor da parte de cima da tabbar
        backgroundColor: tabbarConfigs.colorElements.paletaTabbar.corDeFundo, // cor de fundo da tabbar, derivada do json appcolorelements
      },
    },
  }
);

const RegisterProcess = createStackNavigator(
  {
    // Register: Register,
    // Verification: Verification,
    // setProfile: setProfile,
    Main: Routes,
  },
  {
    headerMode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
    mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
    navigationOptions: {
      gesturesEnabled:
        tabbarConfigs.tabbar.config.stackNavigatorConfigs.gesturesEnabled, //  Se você pode usar gestos para descartar essa tela. O padrão é true no iOS, false no Android.
    },
  }
);

const DefaultStack = createStackNavigator(
  {
    Register: RegisterProcess,
    Main: Routes,
  },
  {
    headerMode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
    mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
    navigationOptions: {
      gesturesEnabled:
        tabbarConfigs.tabbar.config.stackNavigatorConfigs.gesturesEnabled, //  Se você pode usar gestos para descartar essa tela. O padrão é true no iOS, false no Android.
    },
  }
);
export default createAppContainer(DefaultStack); // cria o container da tabbar com todas as configurações acima
// export default createAppContainer(Routes);

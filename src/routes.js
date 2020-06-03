import React from "react";
import { View, Text, Image } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { MaterialIcons } from "@expo/vector-icons";

import Register from "./pages/register/register";
import Verification from "./pages/verification/verification";

import Main from "./pages/main/main";
import Profile from "./pages/profile/profile";
import Friends from "./pages/friendlist/friendlist.js";

import QrCode from "./pages/friendlist/friendQr";
import White from "./pages/white/white";
import Night from "./pages/night/night";

import tabbarConfigs from "./components/styleElements.json";
import setProfile from './pages/RegisterProcess/SetProfile';
import ContactsList from './pages/ContactsList';

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
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
            <MaterialIcons
              name="settings"
              size={tabbarConfigs.tabbar.config.tamanhoIcones}
              color={tintColor}
            />
            <View>
              <Text style={{ color: tintColor, fontSize: 10 }}>config</Text>
            </View>
          </View>
        ),
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
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
            <MaterialIcons
              name="lock"
              size={tabbarConfigs.tabbar.config.tamanhoIcones}
              color={tintColor}
            />
            <View>
              <Text style={{ color: tintColor, fontSize: 10 }}>
                aplicativos
              </Text>
            </View>
          </View>
        ),
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
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
            <MaterialIcons
              name="settings"
              size={tabbarConfigs.tabbar.config.tamanhoIcones}
              color={tintColor}
            />
            <View>
              <Text style={{ color: tintColor, fontSize: 10 }}>config</Text>
            </View>
          </View>
        ),
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
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
            <MaterialIcons
              name="whatshot"
              size={tabbarConfigs.tabbar.config.tamanhoIcones}
              color={tintColor}
            />
            <View>
              <Text style={{ color: tintColor, fontSize: 10 }}>noite</Text>
            </View>
          </View>
        ),
      }),
    },
    Profile: {
      screen: createStackNavigator(
        {
          Profile,
          QrCode,
          Friends,
          ContactsList
        },
        {
          initialRouteName: "Profile",
          headerMode:
            tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
          mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
        }
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
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
            <View>
              <Text style={{ color: tintColor, fontSize: 10 }}>perfil</Text>
            </View>
          </View>
        ),
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
    //cria um navegador do tipo stack
    //gerencia as rotas quando o usuário iniciar o aplicativo
    {
        Register: Register,
        Verification: Verification,
        setProfile: setProfile,
        Main:Routes,
    },
    {
        headerMode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
        mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
        navigationOptions: {
            gesturesEnabled:
            tabbarConfigs.tabbar.config.stackNavigatorConfigs.gesturesEnabled, //  Se você pode usar gestos para descartar essa tela. O padrão é true no iOS, false no Android.
            },
        },
    );


const DefaultStack = createStackNavigator(
  //cria um navegador do tipo stack
  //gerencia as rotas quando o usuário iniciar o aplicativo
  {
    Register: RegisterProcess,
    Main: Routes
  },
  {
    headerMode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.cabecalhoApp, // retira o header do aplicativo - uma parte branca que não usamos
    mode: tabbarConfigs.tabbar.config.stackNavigatorConfigs.mode, // modo de transição do app. O default sempre é card
    navigationOptions: {
      gesturesEnabled:
      tabbarConfigs.tabbar.config.stackNavigatorConfigs.gesturesEnabled, //  Se você pode usar gestos para descartar essa tela. O padrão é true no iOS, false no Android.
    },
  },
);
export default createAppContainer(DefaultStack); // cria o container da tabbar com todas as configurações acima
// export default createAppContainer(Routes);

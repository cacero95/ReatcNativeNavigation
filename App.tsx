import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigator/Tabs';
import { SideMenu } from './src/navigator/SideMenu';
// import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <AppState> */}
      <SideMenu/>
      {/* </AppState> */}
      {/* <Tabs/> */}
    </NavigationContainer>
  )
}

// const AppState = ({ children }: any ) => {
//   return (
//     <AuthProvider>
//       { children }
//     </AuthProvider>
//   )
// }

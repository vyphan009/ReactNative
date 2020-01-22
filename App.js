import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import HomeView from './containers/HomeView';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const App = StackNavigator({
  HomeView: {screen: HomeView}

});

import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  return (
      <View style={styles.container}>
      <View style={styles.navContainer}>

      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C3C3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color:'#fff',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    borderBottomColor: 'white',
    
  }
})

import { Text, View, StyleSheet, Button, Image } from "react-native";

export default function Index() {
  const horarios = require('../../assets/images/clock.png');
  const aulas = require('../../assets/images/calendar.png');
  const boletim = require('../../assets/images/document .png');

  return (
      <View style={styles.container}> 
      <View style={[styles.navContainer,{flexDirection: 'row'},]}>
            <Image source={ horarios } style={[styles.icon1, {backgroundColor: 'white'},]} />
            <Image source={ aulas } style={[styles.icon2, {backgroundColor: 'white'},]} />
            <Image source={ boletim } style={[styles.icon3, {backgroundColor: 'white'},]} />
        </View>  
        <View style={styles.mensagens}>
             <Text style={[styles.msg,{fontSize: 20},]}> Mensagens </Text> 
        </View>
        <View style={styles.pendencias}>
        <Text style={[styles.msg, {fontSize: 20},]}> Pendencias </Text> 
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
  navContainer: {
    top: 30,
    flex: 1,
  },
  icon1: {
    right: 50,
    height: 90,
    width: 90,
    borderWidth: 5,
    borderRadius: 100,
  },
  icon2: {
    height: 90,
    width: 90,
    borderWidth: 5,
    borderRadius: 100,
  },
  icon3: {  
    left: 50,
    height: 90,
    width: 90,
    borderWidth: 5,
    borderRadius: 100, 
  },
  mensagens: {
    backgroundColor: '#FAFAFA',
    height: 150,
    width: 350,
    bottom: 130,
    borderRadius: 10,
  },
  pendencias: {
    backgroundColor: '#FAFAFA',
    height: 150,
    width: 350,
    bottom: 60,
    borderRadius: 10
  },
  msg:{
    fontWeight: 'bold',
  }
})

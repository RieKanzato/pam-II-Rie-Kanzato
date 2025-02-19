import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


export default function PerfilScreen() {
    const perfilPic = require('../../assets/images/iconPfp.png');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Curso1', value: 'curso1'},
    {label: 'Curso2', value: 'curso2'}
  ]);
  return (
    
    <View style={styles.container}>
      <View style={styles.perfil}> 
        <View style={styles.iconContainer}>
          <Image source={ perfilPic } style={styles.icon} />
        </View>
          <Text style={styles.username}>{'\n'}User Sobrenome{'\n'}</Text>
          <Text style={styles.info}>
          {'\n'}RM:{'\n'}
          RA SED:{'\n'}
          Mod/Serie Atual:{'\n'}
          Turma:{'\n'}
          Grupo do Componente:{'\n'}
          Sit. da Matricula:{'\n'}
          {'\n'}
          </Text>
          <Text style={styles.hab}>{'\n'}Habilitação{'\n'}</Text>
          <View style= {styles.picker}>
            <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c3c3c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer:{
    alignContent: 'center',
  },
  icon:{
    top: 20,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#3C3C3C',
  },
  perfil: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flex: 1,
    width: '90%',
    height: '95%',
  },
  username: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
  },
  info: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    right: 60,
  },
  hab: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    right: 100,
  },
  picker:{
    top: 20,
  },
});

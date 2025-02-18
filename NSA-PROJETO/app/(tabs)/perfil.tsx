import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function PerfilScreen() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Curso1', value: 'curso1'},
    {label: 'Curso2', value: 'curso2'}
  ]);
  return (
    
    <View style={styles.container}>
     <View style={styles.perfil}>
      <Text style={styles.username}>{'\n'}User Sobrenome{'\n'}</Text>
      <Text style={styles.info}>
      {'\n'}RM:{'\n'}
      {'\n'}RA SED:{'\n'}
      {'\n'}Mod/Serie Atual:{'\n'}
      {'\n'}Turma:{'\n'}
      {'\n'}Grupo do Componente:{'\n'}
      {'\n'}Sit. da Matricula:{'\n'}
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
  perfil: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    top: 35,
    width: '90%',
    height: '85%',
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
